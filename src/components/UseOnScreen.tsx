import { useEffect, useState, useRef } from "react";

export const useOnScreen = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting);
      }, options);

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [ref, options]);

  return { ref, isIntersecting };
};
