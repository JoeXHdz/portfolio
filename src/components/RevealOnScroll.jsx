import { use } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entries]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
        }
      });
    });
    observer.observe(ref.current);
  });

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
};
