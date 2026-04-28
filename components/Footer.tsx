"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ marginTop: "4rem", padding: "4rem 0 2rem", position: "relative" }}>
      {/* Animated Background Element for the whole footer area */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "50%",
          background: "linear-gradient(to top, rgba(233,213,255,0.4), transparent)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      ></div>

      <div className="container" style={{ paddingBottom: "2rem", position: "relative" }}>
        {/**/}
        <div
          className="footer-glow-orb"
          style={{
            top: "-10%",
            left: "-5%",
            width: "350px",
            height: "350px",
            background: "linear-gradient(135deg, var(--pastel-pink-pure), var(--accent-pink))",
            opacity: 0.5,
          }}
        ></div>
        <div
          className="footer-glow-orb"
          style={{
            bottom: "-10%",
            right: "-5%",
            width: "400px",
            height: "400px",
            background: "linear-gradient(135deg, var(--pastel-lavender-pure), var(--accent-lavender))",
            opacity: 0.5,
            animationDelay: "-4s",
          }}
        ></div>
        <div
          className="footer-glow-orb"
          style={{
            top: "30%",
            left: "50%",
            width: "250px",
            height: "250px",
            background: "linear-gradient(135deg, var(--pastel-pink-pure), var(--pastel-lavender-pure))",
            opacity: 0.5,
            animationDelay: "-2s",
            transform: "translateX(-50%)",
          }}
        ></div>

        <div
          className="glass-card reveal footer-modern-card"
          style={{ padding: "3.5rem", position: "relative", borderRadius: "30px", zIndex: 1 }}
        >
          <div
            className="footer-content"
            style={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "4rem",
              marginBottom: 0,
            }}
          >
            {/* Col 1: Brand */}
            <div className="footer-brand" style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div>
                <h3
                  style={{
                    marginBottom: "0.5rem",
                    fontSize: "2rem",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    background: "linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  Dr. Mrinalini Atrey
                </h3>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "var(--text-light)", marginTop: "0.5rem" }}>
                  Exploring memory, craft, and regional resilience through the lens of heritage and global advocacy.
                </p>
              </div>
            </div>

            {/* Col 2: Quick Links & Contact */}
            <div className="footer-nav" style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <h4
                  style={{
                    marginBottom: "1.2rem",
                    color: "var(--text-dark)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontSize: "0.85rem",
                  }}
                >
                  Explore
                </h4>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <Link href="/" className="footer-nav-link">
                    <i className="fa-solid fa-house" style={{ marginRight: "8px", color: "var(--accent-lavender)", fontSize: "0.9em" }}></i>{" "}
                    Home
                  </Link>
                  <Link href="/#about" className="footer-nav-link">
                    <i className="fa-solid fa-user" style={{ marginRight: "8px", color: "var(--accent-pink)", fontSize: "0.9em" }}></i>{" "}
                    About
                  </Link>
                  <Link href="/blogs" className="footer-nav-link">
                    <i className="fa-solid fa-pen-nib" style={{ marginRight: "8px", color: "var(--accent-lavender)", fontSize: "0.9em" }}></i>{" "}
                    Blogs
                  </Link>
                  <Link href="/academics" className="footer-nav-link">
                    <i className="fa-solid fa-graduation-cap" style={{ marginRight: "8px", color: "var(--accent-pink)", fontSize: "0.9em" }}></i>{" "}
                    Academics
                  </Link>
                </div>
              </div>

              <div>
                <h4
                  style={{
                    marginBottom: "1.2rem",
                    color: "var(--text-dark)",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontSize: "0.85rem",
                  }}
                >
                  Contact
                </h4>
                <a
                  href="mailto:atreymrinalini@gmail.com"
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.8rem", color: "var(--text-light)", textDecoration: "none", transition: "transform 0.3s ease" }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = "translateX(5px)")}
                  onMouseOut={(e) => (e.currentTarget.style.transform = "translateX(0)")}
                >
                  <div
                    style={{
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      background: "var(--pastel-pink-pure)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--accent-pink)",
                    }}
                  >
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <span style={{ fontWeight: 500 }}>atreymrinalini@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Col 3: Social & Profiles */}
            <div className="footer-socials">
              <h4
                style={{
                  marginBottom: "1.2rem",
                  color: "var(--text-dark)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontSize: "0.85rem",
                }}
              >
                Connect & Profiles
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <a href="https://scholar.google.co.in/citations?user=HCrTFzMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <i className="fa-solid fa-book-open"></i> Google Scholar
                </a>
                <a href="https://jammuuniversity.academia.edu/MrinaliniAtrey/CurriculumVitae" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <i className="fa-solid fa-graduation-cap"></i> Academia.edu
                </a>
                <a href="https://www.linkedin.com/in/mrinalini-a-61875510/" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                </a>
                <a href="https://www.youtube.com/@Pastandpages" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <i className="fa-brands fa-youtube"></i> YouTube
                </a>
                <a href="https://www.icomosindia.com/nsc.html" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <i className="fa-solid fa-landmark"></i> ICOMOS
                </a>
                <a href="https://www.criticalheritagestudies.org/membership-directory#!biz/id/563ee34c4f952ee5392f9f95" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
                  <i className="fa-solid fa-users"></i> ACHS
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Divider */}
          <div
            style={{
              marginTop: "4rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.6)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              position: "relative",
              zIndex: 1,
            }}
          >
            <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-light)", fontWeight: 500, textAlign: "center" }}>
              &copy; 2026 Dr. Mrinalini Atrey. All rights reserved. | Made with 💖 | By{" "}
              <a
                href="https://prem-singh.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent-pink)", fontWeight: 600, textDecoration: "none", transition: "opacity 0.3s" }}
                onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
                onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Prem
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
