export default async function handler(req, res) {
  try {
    const SCHOLAR_URL = 'https://scholar.google.co.in/citations?user=HCrTFzMAAAAJ&hl=en&cstart=0&pagesize=100';
    
    // 1. Fetch HTML from Google Scholar
    const scholarRes = await fetch(SCHOLAR_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
      }
    });
    
    if (!scholarRes.ok) {
      throw new Error(`Failed to fetch Scholar profile: ${scholarRes.status}`);
    }
    
    let htmlText = await scholarRes.text();
    
    // Sanitize HTML to respect Gemini payload limits. We only need the main table #gsc_bpf.
    // If the HTML is too large, we extract just the #gsc_a_b table body which contains all the papers.
    const match = htmlText.match(/<tbody id="gsc_a_b">([\s\S]*?)<\/tbody>/);
    if (match && match[1]) {
      htmlText = match[1];
    } else {
      // Fallback, truncate to 35000 characters to be safe
      htmlText = htmlText.substring(0, 35000);
    }
    
    // 2. Call Gemini API to extract papers
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY environment variable is missing.");
    }
    
    const prompt = `
      Extract all the research papers from the following Google Scholar HTML snippet.
      Return ONLY a valid JSON array of objects. Do not wrap it in markdown blockquotes like \`\`\`json.
      Each object must have exactly these properties:
      - "title" (string)
      - "authors" (string)
      - "venue" (string, the publication/journal name)
      - "year" (string)
      - "citations" (integer, parsed from the text, default to 0 if none or empty)
      - "link" (string, the absolute URL to the paper. If the href in the HTML is relative starting with "/", prepend "https://scholar.google.co.in" to it.)
      
      Here is the HTML:
      ${htmlText}
    `;

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    const geminiRes = await fetch(geminiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }],
        generationConfig: {
            temperature: 0.1,
            responseMimeType: "application/json"
        }
      })
    });
    
    if (!geminiRes.ok) {
      const errorText = await geminiRes.text();
      console.error("Gemini API error:", errorText);
      throw new Error(`Gemini API error: ${geminiRes.status}`);
    }
    
    const geminiData = await geminiRes.json();
    const rawText = geminiData.candidates[0].content.parts[0].text;
    
    // Parse the JSON array
    const papers = JSON.parse(rawText);
    
    // Set caching: Cache at the edge for 12 hours (43200 seconds), allow stale serving while revalidating
    res.setHeader('Cache-Control', 's-maxage=43200, stale-while-revalidate=86400');
    // Also add CORS headers just in case it's called from a different domain (though it shouldn't be)
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    
    res.status(200).json(papers);
    
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: error.message });
  }
}
getPapers.js
