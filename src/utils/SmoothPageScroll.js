"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";


function SmoothPageScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // 1.2 is default, 1.5 is a bit more premium and smooth
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Synchronize global GSAP ScrollTrigger with Lenis
    // since the project uses window.ScrollTrigger in layout.js
    lenis.on('scroll', () => {
      if (window.ScrollTrigger) {
        window.ScrollTrigger.update();
      }
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

export default SmoothPageScroll;