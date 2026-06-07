"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from 'next/navigation';

export const useWow = () => {
  const pathname = usePathname();
  const wowRef = useRef(null); // 👈 use ref instead of state
  const [wow, setWow] = useState(null);

  useEffect(() => {
    const initWow = async () => {
      if (typeof window !== "undefined") {
        const WOW = (await import("wowjs")).default;
        const instance = new WOW.WOW({
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: true,
          live: true,
        });
        instance.init();
        wowRef.current = instance; // 👈 store in ref
        setWow(instance);
      }
    };
    initWow();
    return () => {
      if (wowRef.current) {
        wowRef.current.stop(); // 👈 use ref in cleanup (no dependency needed)
      }
    };
  }, []); // ✅ empty array is now valid, no ESLint complaint

  useEffect(() => {
    if (wow) {
      wow.sync();
    }
  }, [pathname, wow]);

  return wow;
};
