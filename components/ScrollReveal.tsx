"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            // Stop observing once revealed to optimize performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -100px 0px",
        threshold: 0,
      }
    );

    reveals.forEach((reveal) => {
      observer.observe(reveal);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
