import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <header
        className="section"
        id="home"
        style={{
          marginTop: "var(--nav-height)",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          <div className="hero-content">
            <span className="glass-pill" style={{ marginBottom: "1.5rem" }}>
              Dr. Mrinalini Atrey
            </span>
            <h1 style={{ lineHeight: 1.2, marginBottom: "1rem" }}>
              Historian, Heritage Professional <br />&{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Folklorist Jammu Region
              </span>
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                marginBottom: "2.5rem",
                lineHeight: 1.7,
                opacity: 0.9,
              }}
            >
              Secretary-General, ICICH | National Scientific Co-Counselor,
              ICOMOS-India <br /> Teaches History at The Law School, University of Jammu.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/academics" className="btn btn-primary">
                View Academics
              </Link>
              <Link href="/#about" className="btn btn-glass">
                About Me
              </Link>
            </div>
          </div>
          <div
            className="hero-image"
            style={{ position: "relative", maxWidth: "400px", margin: "0 auto", width: "100%" }}
          >
            {/* Subtle glowing animated background effect */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                background:
                  "linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))",
                borderRadius: "24px",
                zIndex: -2,
                animation: "pulseGlow 4s infinite alternate",
              }}
            ></div>

            {/* Decorative glass background for the image */}
            <div
              className="glass-panel"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                transform: "rotate(5deg) scale(0.95)",
                zIndex: -1,
              }}
            ></div>

            <div
              className="glass-panel hero-img-container"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "20px",
                aspectRatio: "4/5",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.6)",
                padding: 0,
                border: "1px solid var(--glass-border)",
              }}
            >
              {/* Note: In Next.js we use standard img for direct references from public folder to keep it simple, or next/image. */}
              <img
                src="/Mam (1).avif"
                alt="Dr. Mrinalini Atrey"
                className="Mrinalini-img"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="section" id="about">
        <div className="container">
          <div
            className="glass-card reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "3rem",
            }}
          >
            <div>
              <h2>About Me</h2>
              <p>
                Dr Mrinalini Atrey is a heritage scholar and cultural practitioner
                with over two decades of research experience. Her work interlaces
                ritual, memory, craft, and regional resilience—focusing on
                gendered foodways, oral traditions, and the everyday
                manifestations of intangible cultural heritage in the Jammu region
                of India.
              </p>
              <p>
                Her scholarly practice spans documentation, pedagogy, and cultural
                programming, consistently aligning local traditions with global
                sustainability frameworks such as UNESCO’s Living Heritage
                approach and SDG 11. Deeply committed to participatory
                conservation, she foregrounds community voices in historical
                discourse—honouring plural memory, ritual agency, and inclusive
                stewardship.
              </p>
              <p>
                Recently represented ICOMOS International at IGC.20COM (UNESCO’s
                20th Intergovernmental Committee Session on Intangible Cultural
                Heritage, New Delhi).
              </p>
            </div>
            <div className="about-divider">
              <h3 style={{ marginBottom: "1.5rem" }}>Professional Engagements</h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "grid",
                  gap: "1rem",
                  fontSize: "0.9rem",
                }}
              >
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <i
                    className="fa-solid fa-check-circle"
                    style={{
                      color: "var(--accent-lavender)",
                      marginRight: "15px",
                      fontSize: "1.2rem",
                      marginTop: "3px",
                    }}
                  ></i>
                  <span><strong>Academic:</strong> Assistant Professor, The Law School, University of Jammu</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <i
                    className="fa-solid fa-check-circle"
                    style={{
                      color: "var(--accent-lavender)",
                      marginRight: "15px",
                      fontSize: "1.2rem",
                      marginTop: "3px",
                    }}
                  ></i>
                  <span><strong>Consultancy:</strong> Member, Core team, Masterplan Preparation, Smart City Development Corporation Ltd. Solapur, Maharashtra</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <i
                    className="fa-solid fa-check-circle"
                    style={{
                      color: "var(--accent-lavender)",
                      marginRight: "15px",
                      fontSize: "1.2rem",
                      marginTop: "3px",
                    }}
                  ></i>
                  <span><strong>Coordinator:</strong> ACHS India Chapter & National Scientific Committee on Intangible Cultural Heritage, ICOMOS-India</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <i
                    className="fa-solid fa-check-circle"
                    style={{
                      color: "var(--accent-lavender)",
                      marginRight: "15px",
                      fontSize: "1.2rem",
                      marginTop: "3px",
                    }}
                  ></i>
                  <span><strong>Executive & Voting Member:</strong> ICICH (International Committee on Intangible Cultural Heritage), ICOMOS & ACHS ICH Network Committee</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <i
                    className="fa-solid fa-check-circle"
                    style={{
                      color: "var(--accent-lavender)",
                      marginRight: "15px",
                      fontSize: "1.2rem",
                      marginTop: "3px",
                    }}
                  ></i>
                  <span><strong>Expert Member:</strong> International Scientific Committee on Water and Heritage, ICOMOS</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <i
                    className="fa-solid fa-check-circle"
                    style={{
                      color: "var(--accent-lavender)",
                      marginRight: "15px",
                      fontSize: "1.2rem",
                      marginTop: "3px",
                    }}
                  ></i>
                  <span><strong>Member:</strong> National Scientific Committee on Water and Heritage, Architectural Heritage Management, & Sustainable Development Working Group, ICOMOS India</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <i
                    className="fa-solid fa-check-circle"
                    style={{
                      color: "var(--accent-lavender)",
                      marginRight: "15px",
                      fontSize: "1.2rem",
                      marginTop: "3px",
                    }}
                  ></i>
                  <span><strong>Editorial Affiliations:</strong> Member, Editorial Board, Maati Katha, Biannual Journal, Ahmedabad</span>
                </li>
                <li style={{ display: "flex", alignItems: "flex-start" }}>
                  <i
                    className="fa-solid fa-check-circle"
                    style={{
                      color: "var(--accent-lavender)",
                      marginRight: "15px",
                      fontSize: "1.2rem",
                      marginTop: "3px",
                    }}
                  ></i>
                  <span><strong>City Coordinator:</strong> Historic Cities Series 2025, Jammu Edition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Academics/Research Glimpse */}
      <section className="section" id="research">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }} className="reveal">
            <h2>Featured Research</h2>
            <p>A glimpse into my latest published academic works.</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Card 1: 2025 */}
            <div className="glass-card reveal">
              <span
                className="glass-pill"
                style={{ marginBottom: "1rem", fontSize: "0.75rem" }}
              >
                2025 | Book Chapter
              </span>
              <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>
                Seasonal migration practices of the Gujjar and Bakarwal
                communities
              </h3>
              <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                Intangible cultural heritage safeguarding & climate action
              </p>
              <Link
                href="/academics"
                style={{
                  color: "var(--accent-pink)",
                  fontWeight: 500,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Read Paper
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "5px" }}></i>
              </Link>
            </div>
            {/* Card 2: 2023 */}
            <div className="glass-card reveal" style={{ transitionDelay: "0.1s" }}>
              <span
                className="glass-pill"
                style={{ marginBottom: "1rem", fontSize: "0.75rem" }}
              >
                2023 | Newsletter Article
              </span>
              <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>
                How Now, My Good Folklorist, I have Some Questions for You...
              </h3>
              <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                ISFNR Newsletter
              </p>
              <Link
                href="/academics"
                style={{
                  color: "var(--accent-pink)",
                  fontWeight: 500,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Read Paper
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "5px" }}></i>
              </Link>
            </div>
            {/* Card 3: 2021 */}
            <div className="glass-card reveal" style={{ transitionDelay: "0.2s" }}>
              <span
                className="glass-pill"
                style={{ marginBottom: "1rem", fontSize: "0.75rem" }}
              >
                2021 | Book Chapter
              </span>
              <h3 style={{ marginBottom: "1rem", fontSize: "1.25rem" }}>
                Documenting the Folk Deities of Jammu Region
              </h3>
              <p style={{ fontSize: "0.95rem", marginBottom: "1.5rem" }}>
                Understanding Culture and Society in India
              </p>
              <Link
                href="/academics"
                style={{
                  color: "var(--accent-pink)",
                  fontWeight: 500,
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Read Paper
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "5px" }}></i>
              </Link>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
            <Link href="/academics" className="btn btn-glass">
              View Full Archive
            </Link>
          </div>
        </div>
      </section>

      {/* Blogs Glimpse */}
      <section className="section" id="blogs">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }} className="reveal">
            <h2>Latest Insights</h2>
            <p>Thoughts and articles on various topics.</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* Blog Card 1 */}
            <div className="glass-card reveal">
              <div
                style={{
                  background: "rgba(255,255,255,0.4)",
                  height: "150px",
                  borderRadius: "12px",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="fa-solid fa-landmark"
                  style={{
                    color: "var(--accent-pink)",
                    fontSize: "2.5rem",
                    opacity: 0.8,
                  }}
                ></i>
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                Pakki Dhakki: A Heritage Lost in Silence
              </h3>
              <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                Explore the rich cultural heritage of Pakki Dhakki in Jammu. Discover how this historic slope reflects a need for conservation.
              </p>
              <Link
                href="/blogs/pakki-dhakki"
                style={{
                  color: "var(--accent-lavender)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Read More &rarr;
              </Link>
            </div>
            {/* Blog Card 2 */}
            <div className="glass-card reveal" style={{ transitionDelay: "0.1s" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.4)",
                  height: "150px",
                  borderRadius: "12px",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="fa-solid fa-users"
                  style={{
                    color: "var(--accent-lavender)",
                    fontSize: "2.5rem",
                    opacity: 0.8,
                  }}
                ></i>
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                Appropriation and Awakening: Dogra Heritage
              </h3>
              <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                Discover why the Dogra community of Jammu must become conscious custodians of their heritage in a globalizing world.
              </p>
              <Link
                href="/blogs/dogra-cultural-heritage"
                style={{
                  color: "var(--accent-lavender)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Read More &rarr;
              </Link>
            </div>
            {/* Blog Card 3 */}
            <div className="glass-card reveal" style={{ transitionDelay: "0.2s" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.4)",
                  height: "150px",
                  borderRadius: "12px",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <i
                  className="fa-solid fa-vihara"
                  style={{
                    color: "var(--accent-pink)",
                    fontSize: "2.5rem",
                    opacity: 0.8,
                  }}
                ></i>
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                Dhounthali’s Divine Threshold: Balram Ji Temple
              </h3>
              <p style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                Explore the spiritual and architectural significance of the Balram Ji Temple in Jammu and its restoration concerns.
              </p>
              <Link
                href="/blogs/balram-ji-temple"
                style={{
                  color: "var(--accent-lavender)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }} className="reveal">
            <Link href="/blogs" className="btn btn-glass">
              Read All Blogs
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact">
        <div className="container">
          <div
            className="glass-card reveal"
            style={{ textAlign: "center", padding: "4rem 2rem" }}
          >
            <h2 style={{ marginBottom: "1rem" }}>Get In Touch</h2>
            <p style={{ maxWidth: "600px", margin: "0 auto 1rem" }}>
              Interested in collaboration, have a question about my research, or want to
              connect regarding international positions? Feel free to reach out.
            </p>
            <p style={{ fontWeight: 500, marginBottom: "2rem" }}>
              <i
                className="fa-solid fa-envelope"
                style={{ color: "var(--accent-pink)", marginRight: "10px" }}
              ></i>{" "}
              <a
                href="mailto:atreymrinalini@gmail.com"
                style={{ color: "var(--accent-lavender)" }}
              >
                atreymrinalini@gmail.com
              </a>
            </p>
            <div style={{ marginTop: "2rem", position: "relative", zIndex: 2 }}>
              <a
                href="mailto:atreymrinalini@gmail.com"
                className="btn btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <i className="fa-solid fa-paper-plane"></i> Email Me Directly
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
