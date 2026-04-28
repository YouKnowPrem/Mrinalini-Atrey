import Link from "next/link";
import "./blogs.css";

export default function Blogs() {
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
        </div>
      </header>

      {/* Blog Archive */}
      <main className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="blog-list">
            {/* Pakki Dhakki Post */}
            <article className="glass-card blog-item reveal">
              <div
                style={{
                  background: "rgba(255,255,255,0.4)",
                  borderRadius: "12px",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fa-solid fa-landmark" style={{ fontSize: "4rem", color: "var(--accent-pink)", opacity: 0.7 }}></i>
              </div>
              <div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="glass-pill" style={{ fontSize: "0.75rem" }}>Cultural Heritage</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>April 2026</span>
                </div>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Pakki Dhakki: A Heritage Lost in Silence</h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  Explore the rich cultural heritage of Pakki Dhakki in Jammu. Discover how this historic slope connecting Mubarak Mandi to the Tawi River reflects a need for community-led conservation and landscape-based stewardship.
                </p>
                <Link href="/blogs/pakki-dhakki" className="btn btn-primary" style={{ padding: "0.7rem 1.5rem", fontSize: "1rem" }}>
                  Read Full Article
                </Link>
              </div>
            </article>

            {/* Dogra Cultural Heritage Post */}
            <article className="glass-card blog-item reveal">
              <div
                style={{
                  background: "rgba(255,255,255,0.4)",
                  borderRadius: "12px",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fa-solid fa-users" style={{ fontSize: "4rem", color: "var(--accent-lavender)", opacity: 0.7 }}></i>
              </div>
              <div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="glass-pill" style={{ fontSize: "0.75rem" }}>Cultural Heritage</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>April 2026</span>
                </div>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Appropriation and Awakening: Safeguarding Dogra Cultural Heritage</h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  In today’s rapidly globalizing world, cultural appropriation is no longer just about losing credit—it is about losing identity, voice, and ownership. Discover why the Dogra community of Jammu must become conscious custodians of their heritage.
                </p>
                <Link href="/blogs/dogra-cultural-heritage" className="btn btn-primary" style={{ padding: "0.7rem 1.5rem", fontSize: "1rem" }}>
                  Read Full Article
                </Link>
              </div>
            </article>

            {/* Balram Ji Temple Post */}
            <article className="glass-card blog-item reveal" style={{ transitionDelay: "0.1s" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.4)",
                  borderRadius: "12px",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fa-solid fa-vihara" style={{ fontSize: "4rem", color: "var(--accent-pink)", opacity: 0.7 }}></i>
              </div>
              <div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="glass-pill" style={{ fontSize: "0.75rem" }}>Heritage Conservation</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>April 2026</span>
                </div>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Dhounthali’s Divine Threshold: Balram Ji Temple</h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  Explore the spiritual and architectural significance of the Balram Ji Temple in Jammu and the pressing concerns regarding its modern restoration. Will its heritage survive?
                </p>
                <Link href="/blogs/balram-ji-temple" className="btn btn-primary" style={{ padding: "0.7rem 1.5rem", fontSize: "1rem" }}>
                  Read Full Article
                </Link>
              </div>
            </article>

            {/* Chanchlo Review Post */}
            <article className="glass-card blog-item reveal" style={{ transitionDelay: "0.1s" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.4)",
                  borderRadius: "12px",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fa-solid fa-masks-theater" style={{ fontSize: "4rem", color: "var(--accent-lavender)", opacity: 0.7 }}></i>
              </div>
              <div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="glass-pill" style={{ fontSize: "0.75rem" }}>Theatre Review</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>April 2026</span>
                </div>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>A Quiet Rebellion in Dogri Theatre: Review of Chanchlo</h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  Discover how a powerful 90-minute solo performance redefines regional theatre. Read the review of "Chanchlo", an adaptation that masterfully captures the margins of society and brings invisible struggles to the stage.
                </p>
                <Link href="/blogs/chanchlo-review" className="btn btn-primary" style={{ padding: "0.7rem 1.5rem", fontSize: "1rem" }}>
                  Read Full Article
                </Link>
              </div>
            </article>

            {/* Silent Destruction of Heritage Post */}
            <article className="glass-card blog-item reveal" style={{ transitionDelay: "0.1s" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.4)",
                  borderRadius: "12px",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fa-solid fa-building-columns" style={{ fontSize: "4rem", color: "var(--accent-pink)", opacity: 0.7 }}></i>
              </div>
              <div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="glass-pill" style={{ fontSize: "0.75rem" }}>Heritage Conservation</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>April 2026</span>
                </div>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Silent Destruction of Heritage in J&K</h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  Discover why the preservation of monuments in Jammu & Kashmir must become both a legal obligation and a cultural priority to prevent irreversible loss.
                </p>
                <Link href="/blogs/silent-destruction-heritage" className="btn btn-primary" style={{ padding: "0.7rem 1.5rem", fontSize: "1rem" }}>
                  Read Full Article
                </Link>
              </div>
            </article>

            {/* Ramban Book Review Post */}
            <article className="glass-card blog-item reveal" style={{ transitionDelay: "0.1s" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.4)",
                  borderRadius: "12px",
                  height: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i className="fa-solid fa-book-open" style={{ fontSize: "4rem", color: "var(--accent-lavender)", opacity: 0.7 }}></i>
              </div>
              <div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
                  <span className="glass-pill" style={{ fontSize: "0.75rem" }}>Book Review</span>
                  <span style={{ fontSize: "0.85rem", color: "var(--text-light)" }}>April 2026</span>
                </div>
                <h2 style={{ fontSize: "1.8rem", marginBottom: "1rem" }}>Ramban: Folklore, History & Ophiolatry</h2>
                <p style={{ marginBottom: "1.5rem" }}>
                  A landmark study of serpent worship in Jammu & Kashmir. This review explores Robin Koul's compelling documentation of Naga traditions and regional identity.
                </p>
                <Link href="/blogs/ramban-book-review" className="btn btn-primary" style={{ padding: "0.7rem 1.5rem", fontSize: "1rem" }}>
                  Read Full Article
                </Link>
              </div>
            </article>

          </div>
        </div>
      </main>
    </>
  );
}
