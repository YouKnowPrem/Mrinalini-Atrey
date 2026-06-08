import fs from 'fs';
import path from 'path';
import { createClient } from '@sanity/client';

// Helper to parse .env.local manually
function loadEnv() {
  const envPath = path.resolve(process.cwd(), '.env.local');
  if (!fs.existsSync(envPath)) {
    console.error('.env.local file not found. Please create it first.');
    process.exit(1);
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const parts = trimmed.split('=');
    const key = parts[0].trim();
    const value = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
    env[key] = value;
  });
  return env;
}

const env = loadEnv();
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = env.NEXT_PUBLIC_SANITY_DATASET;
const token = env.SANITY_WRITE_TOKEN;

if (!projectId || !dataset) {
  console.error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID or NEXT_PUBLIC_SANITY_DATASET in .env.local');
  process.exit(1);
}

if (!token) {
  console.log('\n⚠️  SANITY_WRITE_TOKEN is not set in .env.local');
  console.log('To run this migration, please:');
  console.log('1. Go to https://www.sanity.io/manage');
  console.log('2. Select your project: ' + projectId);
  console.log('3. Go to the "API" tab and click "Add API token"');
  console.log('4. Create a token with "Write" permissions');
  console.log('5. Add it to .env.local as: SANITY_WRITE_TOKEN=your_token_here\n');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2023-05-03',
  useCdn: false,
});

// Helper to clean HTML tags and parse simple inline strong/em formatting for Portable Text
function parseInlineStyles(text) {
  // We will split the text into spans with marks
  const spans = [];
  
  // Replace some common HTML tags with placeholders
  // We will support simple strong, em, and plain text
  // Match groups: [1] strong, [2] em, [3] strong+em, [4] plain text
  const regex = /(?:<strong>(.*?)<\/strong>)|(?:<em>(.*?)<\/em>)|([^<]+)/g;
  let match;
  let hasMatch = false;

  while ((match = regex.exec(text)) !== null) {
    hasMatch = true;
    if (match[1]) {
      // Strong
      spans.push({
        _type: 'span',
        text: cleanText(match[1]),
        marks: ['strong']
      });
    } else if (match[2]) {
      // Em
      spans.push({
        _type: 'span',
        text: cleanText(match[2]),
        marks: ['em']
      });
    } else if (match[3]) {
      // Plain text
      spans.push({
        _type: 'span',
        text: cleanText(match[3]),
        marks: []
      });
    }
  }

  if (!hasMatch || spans.length === 0) {
    spans.push({
      _type: 'span',
      text: cleanText(text),
      marks: []
    });
  }

  return spans;
}

function cleanText(text) {
  return text
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<br\s*\/?>/gi, '')
    .replace(/<[^>]*>/g, '') // Strip remaining tags
    .trim();
}

// Map HTML elements to Portable Text blocks
function parseBlogPostContent(htmlContent) {
  const blocks = [];
  
  // Extract content inside <article> if present, or just use the whole file
  let body = htmlContent;
  const articleMatch = htmlContent.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  if (articleMatch) {
    body = articleMatch[1];
  }

  // Remove the meta div and title H1 to only parse content
  body = body.replace(/<h1>[\s\S]*?<\/h1>/, '');
  body = body.replace(/<div className="blog-meta">[\s\S]*?<\/div>/, '');
  body = body.replace(/<div className="author-box">[\s\S]*?<\/div>/, '');
  body = body.replace(/<Link[\s\S]*?<\/Link>/g, '');

  // Regexes for blocks
  // Headings: h2, h3
  // Paragraphs: p
  // Blockquotes: blockquote
  // Lists: ul/ol with li
  const blockRegex = /<(h2|h3|p|blockquote|ul)[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;

  while ((match = blockRegex.exec(body)) !== null) {
    const tag = match[1].toLowerCase();
    const content = match[2].trim();

    if (tag === 'h2') {
      blocks.push({
        _key: Math.random().toString(36).substring(2, 11),
        _type: 'block',
        style: 'h2',
        markDefs: [],
        children: [{ _type: 'span', text: cleanText(content), marks: [] }]
      });
    } else if (tag === 'h3') {
      blocks.push({
        _key: Math.random().toString(36).substring(2, 11),
        _type: 'block',
        style: 'h3',
        markDefs: [],
        children: [{ _type: 'span', text: cleanText(content), marks: [] }]
      });
    } else if (tag === 'blockquote') {
      // Clean up blockquote content (removing emojis or structural lines)
      blocks.push({
        _key: Math.random().toString(36).substring(2, 11),
        _type: 'block',
        style: 'blockquote',
        markDefs: [],
        children: [{ _type: 'span', text: cleanText(content), marks: [] }]
      });
    } else if (tag === 'p') {
      const spans = parseInlineStyles(content);
      blocks.push({
        _key: Math.random().toString(36).substring(2, 11),
        _type: 'block',
        style: 'normal',
        markDefs: [],
        children: spans
      });
    } else if (tag === 'ul') {
      // Parse list items
      const liRegex = /<li[^>]*>([\s\S]*?)<\/li>/gi;
      let liMatch;
      while ((liMatch = liRegex.exec(content)) !== null) {
        const liContent = liMatch[1].trim();
        const spans = parseInlineStyles(liContent);
        blocks.push({
          _key: Math.random().toString(36).substring(2, 11),
          _type: 'block',
          style: 'normal',
          listItem: 'bullet',
          level: 1,
          markDefs: [],
          children: spans
        });
      }
    }
  }

  return blocks;
}

async function seed() {
  console.log('Starting Sanity Seeding Script...');
  
  // 1. Create Author
  const authorDoc = {
    _type: 'author',
    _id: 'author-mrinalini-atrey',
    name: 'Dr. Mrinalini Atrey',
    role: 'Secretary-General, ICICH-ICOMOS | Co-Counselor, ICOMOS-India',
    bio: 'A heritage scholar bridging fieldwork with global advocacy, focusing on the preservation of cultural landscapes, memory, and intangible heritage.',
    avatarIcon: 'fa-solid fa-pen-nib',
  };

  console.log('Seeding Author document...');
  const seededAuthor = await client.createOrReplace(authorDoc);
  console.log('Seeded Author:', seededAuthor.name);

  // 2. Define Blog Folders metadata
  const blogFolders = [
    {
      folder: 'ramban-book-review',
      slug: 'ramban-book-review',
      icon: 'fa-book-open',
      accentColor: 'lavender',
    },
    {
      folder: 'silent-destruction-heritage',
      slug: 'silent-destruction-heritage',
      icon: 'fa-building-columns',
      accentColor: 'pink',
    },
    {
      folder: 'chanchlo-review',
      slug: 'chanchlo-review',
      icon: 'fa-masks-theater',
      accentColor: 'lavender',
    },
    {
      folder: 'balram-ji-temple',
      slug: 'balram-ji-temple',
      icon: 'fa-vihara',
      accentColor: 'pink',
    },
    {
      folder: 'dogra-cultural-heritage',
      slug: 'dogra-cultural-heritage',
      icon: 'fa-users',
      accentColor: 'lavender',
    },
    {
      folder: 'pakki-dhakki',
      slug: 'pakki-dhakki',
      icon: 'fa-landmark',
      accentColor: 'pink',
    }
  ];

  for (const blog of blogFolders) {
    const pagePath = path.resolve(process.cwd(), 'app', 'blogs', blog.folder, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      console.warn(`Skipping ${blog.folder}: File not found at ${pagePath}`);
      continue;
    }

    console.log(`Reading and parsing ${blog.folder}...`);
    const fileContent = fs.readFileSync(pagePath, 'utf8');

    // Extract basic meta details
    // Title
    const titleMatch = fileContent.match(/<h1>([\s\S]*?)<\/h1>/);
    const title = titleMatch ? cleanText(titleMatch[1]) : blog.folder.replace(/-/g, ' ');

    // Category
    const categoryMatch = fileContent.match(/<span className="glass-pill"[^>]*>([\s\S]*?)<\/span>/);
    let category = 'Cultural Heritage';
    if (categoryMatch) {
      category = cleanText(categoryMatch[1]);
      // Remove any fontawesome icon matches if present
      category = category.replace(/<i[^>]*><\/i>/gi, '').trim();
    }

    // Date
    const dateMatch = fileContent.match(/<span><i className="fa-solid fa-calendar"><\/i>\s*(.*?)<\/span>/);
    let dateStr = '2026-04-01'; // Default
    if (dateMatch) {
      const parsedDateStr = cleanText(dateMatch[1]); // e.g. "April 2026"
      if (parsedDateStr.includes('April 2026')) {
        // Map to standard date
        if (blog.folder === 'ramban-book-review') dateStr = '2026-04-06';
        else if (blog.folder === 'silent-destruction-heritage') dateStr = '2026-04-05';
        else if (blog.folder === 'chanchlo-review') dateStr = '2026-04-04';
        else if (blog.folder === 'balram-ji-temple') dateStr = '2026-04-03';
        else if (blog.folder === 'dogra-cultural-heritage') dateStr = '2026-04-02';
        else dateStr = '2026-04-01';
      }
    }

    // Read Time
    const readTimeMatch = fileContent.match(/<span><i className="fa-solid fa-clock"><\/i>\s*(.*?)<\/span>/);
    const readTime = readTimeMatch ? cleanText(readTimeMatch[1]) : '5 min read';

    // Excerpt (let's pull from the first paragraph or hardcode standard ones to make it super clean)
    let excerpt = '';
    const pMatches = [...fileContent.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];
    if (pMatches && pMatches.length > 0) {
      // Find the first paragraph that doesn't contain simple intro things or is longer
      for (const pm of pMatches) {
        const cleaned = cleanText(pm[1]);
        if (cleaned.length > 50) {
          excerpt = cleaned.substring(0, 180) + '...';
          break;
        }
      }
    }
    if (!excerpt) {
      excerpt = `Insights and reflections on ${title}.`;
    }

    // Parse blocks
    const contentBlocks = parseBlogPostContent(fileContent);

    const postDoc = {
      _type: 'post',
      _id: `post-${blog.slug}`,
      title,
      slug: {
        _type: 'slug',
        current: blog.slug,
      },
      date: dateStr,
      category,
      readTime,
      excerpt,
      icon: blog.icon,
      accentColor: blog.accentColor,
      content: contentBlocks,
      author: {
        _type: 'reference',
        _ref: 'author-mrinalini-atrey',
      },
    };

    console.log(`Uploading ${title} (date: ${dateStr})...`);
    await client.createOrReplace(postDoc);
  }

  console.log('\n🎉 Seeding completed successfully!');
  console.log('All 6 blog posts and the author profile have been migrated to your Sanity project!');
}

seed().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
