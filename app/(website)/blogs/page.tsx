import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import "./blogs.css";

export const revalidate = 3600; // Revalidate every hour

export default async function Blogs() {
  let posts: any[] = [];
  let isSanityConfigured = false;

  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  if (projectId && projectId !== "placeholder") {
    isSanityConfigured = true;
    try {
      const query = `*[_type == "post"] | order(date desc){
        title,
        "slug": slug.current,
        date,
        category,
        readTime,
        excerpt,
        icon,
        accentColor,
        mainImage
      }`;
      posts = await client.fetch(query);
    } catch (err) {
      console.error("Failed to fetch posts from Sanity:", err);
    }
  }

  // Fallback static posts in case Sanity is not yet configured or dataset is empty
  const fallbackPosts = [
    {
      title: "Ramban: Folklore, History & Ophiolatry",
      slug: "ramban-book-review",
      date: "2026-04-06",
      category: "Book Review",
      readTime: "5 min read",
      excerpt: "A landmark study of serpent worship in Jammu & Kashmir. This review explores Robin Koul's compelling documentation of Naga traditions and regional identity.",
      icon: "fa-book-open",
      accentColor: "lavender"
    },
    {
      title: "Silent Destruction of Heritage in J&K",
      slug: "silent-destruction-heritage",
      date: "2026-04-05",
      category: "Heritage Conservation",
      readTime: "5 min read",
      excerpt: "Discover why the preservation of monuments in Jammu & Kashmir must become both a legal obligation and a cultural priority to prevent irreversible loss.",
      icon: "fa-building-columns",
      accentColor: "pink"
    },
    {
      title: "A Quiet Rebellion in Dogri Theatre: Review of Chanchlo",
      slug: "chanchlo-review",
      date: "2026-04-04",
      category: "Theatre Review",
      readTime: "5 min read",
      excerpt: "Discover how a powerful 90-minute solo performance redefines regional theatre. Read the review of \"Chanchlo\", an adaptation that masterfully captures the margins of society and brings invisible struggles to the stage.",
      icon: "fa-masks-theater",
      accentColor: "lavender"
    },
    {
      title: "Dhounthali’s Divine Threshold: Balram Ji Temple",
      slug: "balram-ji-temple",
      date: "2026-04-03",
      category: "Heritage Conservation",
      readTime: "6 min read",
      excerpt: "Explore the spiritual and architectural significance of the Balram Ji Temple in Jammu and the pressing concerns regarding its modern restoration. Will its heritage survive?",
      icon: "fa-vihara",
      accentColor: "pink"
    },
    {
      title: "Appropriation and Awakening: Safeguarding Dogra Cultural Heritage",
      slug: "dogra-cultural-heritage",
      date: "2026-04-02",
      category: "Cultural Heritage",
      readTime: "5 min read",
      excerpt: "In today’s rapidly globalizing world, cultural appropriation is no longer just about losing credit—it is about losing identity, voice, and ownership. Discover why the Dogra community of Jammu must become conscious custodians of their heritage.",
      icon: "fa-users",
      accentColor: "lavender"
    },
    {
      title: "Pakki Dhakki: A Heritage Lost in Silence",
      slug: "pakki-dhakki",
      date: "2026-04-01",
      category: "Cultural Heritage",
      readTime: "6 min read",
      excerpt: "Explore the rich cultural heritage of Pakki Dhakki in Jammu. Discover how this historic slope connecting Mubarak Mandi to the Tawi River reflects a need for community-led conservation and landscape-based stewardship.",
      icon: "fa-landmark",
      accentColor: "pink"
    }
  ];

  const displayPosts = isSanityConfigured && posts.length > 0 ? posts : fallbackPosts;

  return (
    <>
      {/* Page Header */}
      <header className="section" style={{ marginTop: "var(--nav-height)", paddingBottom: "2rem" }}>
        <div className="container text-center" style={{ textAlign: "center" }}>
          <span className="glass-pill" style={{ marginBottom: "1rem" }}>Insights & Articles</span>
          <h1 style={{ transitionDelay: "0.1s" }}>
            Academic{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Blogs
            </span>
          </h1>
          <p style={{ transitionDelay: "0.2s", maxWidth: "600px", margin: "1rem auto 0" }}>
            Explore my collection of thoughts, analyses, and reflections on international academic trends and my experiences across various global positions.
          </p>
          {!isSanityConfigured && (
            <div style={{ marginTop: "1.5rem", display: "inline-block", background: "rgba(255, 235, 235, 0.4)", border: "1px dashed var(--accent-pink)", padding: "0.5rem 1rem", borderRadius: "8px", fontSize: "0.85rem", color: "var(--text-light)" }}>
              <i className="fa-solid fa-circle-info" style={{ color: "var(--accent-pink)", marginRight: "0.5rem" }}></i>
              Running in fallback mode. Configure <strong>NEXT_PUBLIC_SANITY_PROJECT_ID</strong> to load dynamic content.
            </div>
          )}
        </div>
      </header>

      {/* Blog Archive */}
      <main className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="blog-list">
            {displayPosts.map((post: any, idx: number) => {
              const iconColor = post.accentColor === "lavender" ? "var(--accent-lavender)" : "var(--accent-pink)";

              const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
                timeZone: "UTC"
              });

              return (
                <article key={post.slug || idx} className="glass-card blog-item reveal" style={{ transitionDelay: `${0.1 * (idx % 3)}s` }}>
                  <div className="blog-item-image">
                    {post.mainImage?.asset ? (
                      <img
                        src={urlForImage(post.mainImage).url()}
                        alt={post.title}
                      />
                    ) : (
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          backgroundImage: "url('/bahufort-optimized.webp')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "rgba(255, 255, 255, 0.45)",
                            backdropFilter: "blur(4px)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <i
                            className={`fa-solid ${post.icon || 'fa-file-lines'}`}
                            style={{
                              fontSize: "2.5rem",
                              color: iconColor,
                              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.15))",
                            }}
                          ></i>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="blog-item-content">
                    <div className="blog-item-meta">
                      <span className="glass-pill" style={{ fontSize: "0.7rem", padding: "0.3rem 0.6rem" }}>{post.category}</span>
                      <span style={{ fontSize: "0.8rem", color: "var(--text-light)" }}>{formattedDate}</span>
                    </div>
                    <h3 className="blog-item-title">{post.title}</h3>
                    <p className="blog-item-excerpt">{post.excerpt}</p>
                    <div className="blog-item-action">
                      <Link href={`/blogs/${post.slug}`} className="btn btn-primary" style={{ width: "100%", padding: "0.6rem 1.2rem", fontSize: "0.95rem" }}>
                        Read Article
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
