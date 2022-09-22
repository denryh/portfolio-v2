import { useEffect, useState } from "react";

export default function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(Number((scrollProgress / scrollHeight).toFixed(2)) * 100);
    };

    window.addEventListener("scroll", updateScrollProgress);

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return progress;
}
