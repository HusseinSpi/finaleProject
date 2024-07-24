import { useState, useEffect } from "react";

const Fish = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative" style={{ top: `${scrollPosition}px` }}>
      <div
        className="absolute"
        style={{ top: "700px", left: "350px", transform: "translateX(-50%)" }}
      >
        <div className="text-3xl animate-moveFish">🐟</div>
      </div>
    </div>
  );
};

export default Fish;
