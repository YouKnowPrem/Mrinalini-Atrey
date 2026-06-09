'use client';

import { useEffect } from 'react';

export default function FontAwesomeLoader() {
  useEffect(() => {
    // Check if the link element is already added to prevent duplicates
    const existingLink = document.querySelector('link[href*="font-awesome"]');
    if (existingLink) return;

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }, []);

  return null;
}
