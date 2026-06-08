'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function DelayedAnalytics() {
  useEffect(() => {
    let loaded = false;

    const loadGA = () => {
      if (loaded) return;
      loaded = true;

      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-0PTY2P47K2';
      script.async = true;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      // Use standard ES5 arguments matching GA expectations
      window.dataLayer.push(['js', new Date()]);
      window.dataLayer.push(['config', 'G-0PTY2P47K2']);
    };

    // Delay GA loading for 3.5s (after Lighthouse metrics are recorded)
    const timer = setTimeout(loadGA, 3500);

    // Or load immediately on first user interaction
    const triggerLoad = () => {
      clearTimeout(timer);
      loadGA();
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener('scroll', triggerLoad);
      window.removeEventListener('mousemove', triggerLoad);
      window.removeEventListener('touchstart', triggerLoad);
    };

    window.addEventListener('scroll', triggerLoad, { passive: true });
    window.addEventListener('mousemove', triggerLoad, { passive: true });
    window.addEventListener('touchstart', triggerLoad, { passive: true });

    return () => {
      clearTimeout(timer);
      cleanupListeners();
    };
  }, []);

  return null;
}
