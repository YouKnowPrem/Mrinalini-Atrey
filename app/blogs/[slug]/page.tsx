import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import "../blog-post.css";

export const revalidate = 3600; // Revalidate every hour

// Fetch all posts to pre-generate paths for static site generation (SSG)
export async function generateStaticParams() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (!projectId || projectId === "placeholder") {
    return [];
  }
  
  try {
    const query = `*[_type == "post"]{ "slug": slug.current }`;
    const posts = await client.fetch(query);
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (err) {
    console.error("Failed to generate static params:", err);
    return [];
  }
}

// Custom Portable Text components to match existing styles
const portableTextComponents = {
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || "";
      const isExternal = !href.startsWith("/") && !href.startsWith("#");
      return (
        <a 
          href={href} 
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          style={{ color: "var(--accent-pink)", textDecoration: "underline" }}
        >
          {children}
        </a>
      );
    },
  },
};

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    title,
    date,
    category,
    readTime,
    content,
    author->{
      name,
      role,
      bio,
      avatarIcon
    }
  }`;

  let post: any = null;
  let isSanityConfigured = false;
  
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (projectId && projectId !== "placeholder") {
    isSanityConfigured = true;
    try {
      post = await client.fetch(query, { slug: params.slug });
    } catch (err) {
      console.error("Failed to fetch post from Sanity:", err);
    }
  }

  // Fallback check: if post is not found and Sanity is not configured, we don't have it.
  if (!post) {
    return (
      <main className="section" style={{ marginTop: "var(--nav-height)", paddingTop: "2rem" }}>
        <div className="container" style={{ textAlign: "center", padding: "4rem 2rem" }}>
          <h2>Article Not Found</h2>
          <p style={{ color: "var(--text-light)", marginTop: "1rem" }}>
            The blog post you are looking for does not exist, or Sanity is not fully connected.
          </p>
          <Link href="/blogs" className="btn btn-primary" style={{ marginTop: "2rem", display: "inline-flex" }}>
            Back to Blogs
          </Link>
        </div>
      </main>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return (
    <main className="section" style={{ marginTop: "var(--nav-height)", paddingTop: "2rem" }}>
      <div className="container">
        <Link href="/blogs" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--text-light)", textDecoration: "none", marginBottom: "2rem", transition: "color 0.3s ease" }}>
          <i className="fa-solid fa-arrow-left"></i> Back to Blogs
        </Link>
        <article className="blog-content" style={{ animation: "pulse-text 1s forwards" }}>
          <h1>{post.title}</h1>

          <div className="blog-meta">
            <span className="glass-pill" style={{ fontSize: "0.75rem" }}>
              <i className="fa-solid fa-bookmark"></i> {post.category}
            </span>
            <span><i className="fa-solid fa-calendar"></i> {formattedDate}</span>
            <span><i className="fa-solid fa-clock"></i> {post.readTime}</span>
          </div>

          <PortableText value={post.content} components={portableTextComponents} />

          {post.author && (
            <div className="author-box">
              <div
                style={{ 
                  flexShrink: 0, 
                  width: "80px", 
                  height: "80px", 
                  borderRadius: "50%", 
                  background: "linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))", 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center", 
                  fontSize: "2rem", 
                  color: "white", 
                  boxShadow: "0 4px 15px rgba(255, 138, 0, 0.3)" 
                }}
              >
                <i className={post.author.avatarIcon || "fa-solid fa-pen-nib"}></i>
              </div>
              <div className="author-info">
                <h4>{post.author.name}</h4>
                {post.author.role && (
                  <p style={{ color: "var(--accent-pink)", fontSize: "0.9rem", marginBottom: "0.5rem", fontWeight: "500" }}>
                    {post.author.role}
                  </p>
                )}
                {post.author.bio && (
                  <p style={{ color: "var(--text-light)" }}>
                    {post.author.bio}
                  </p>
                )}
              </div>
            </div>
          )}
        </article>
      </div>
    </main>
  );
}
