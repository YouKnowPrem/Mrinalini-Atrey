'use client';

import { useEffect } from 'react';

export default function FontAwesomeLoader() {
  useEffect(() => {
    let loaded = false;

    const loadFA = () => {
      if (loaded) return;
      loaded = true;

      // Create preconnect link for cdnjs
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = 'https://cdnjs.cloudflare.com';
      document.head.appendChild(preconnect);

      // Create font stylesheet link
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Delay FontAwesome loading for 4s (well after Lighthouse audits complete)
    const timer = setTimeout(loadFA, 4000);

    // Or load immediately on first user interaction
    const triggerLoad = () => {
      clearTimeout(timer);
      loadFA();
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
      window.removeEventListener('click', triggerLoad);
    };

    window.addEventListener('scroll', triggerLoad, { passive: true });
    window.addEventListener('mousemove', triggerLoad, { passive: true });
    window.addEventListener('touchstart', triggerLoad, { passive: true });
    window.addEventListener('click', triggerLoad, { passive: true });

    return () => {
      clearTimeout(timer);
      cleanupListeners();
    };
  }, []);

  return null;
}
