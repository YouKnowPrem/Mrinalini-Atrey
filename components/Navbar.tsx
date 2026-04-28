"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container nav-container">
        <Link href="/" className="logo" onClick={() => setMenuOpen(false)}>
          Dr. Mrinalini Atrey
        </Link>
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className={pathname.startsWith("/blogs") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/academics"
              className={pathname === "/academics" ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Academics
            </Link>
          </li>
        </ul>
        <button
          className={`mobile-menu-btn ${menuOpen ? "active" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
