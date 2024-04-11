"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import style from "./animatedTitle.module.css";

export default function AnimatedTitle({
  title,
  size,
}: {
  title: Record<string, string | number>;
  size?: number;
}) {
  const animatedContainerRef = useRef<HTMLDivElement>(null);
  const [animatedTitleStyle, setAnimatedTitleStyle] = useState({
    transform: "translateX(100%)",
    opacity: 0,
    transition: "transform 0.5s ease-out",
  });

  const handleObserver = useCallback(() => {
    if (animatedContainerRef.current) {
      const { top } = animatedContainerRef.current.getBoundingClientRect();

      let titlePosition = title.id == 1 ? top / 10 - 20 : top / 10 - 60;
      if (title.id == 1 && titlePosition <= 0) titlePosition = 0;

      setAnimatedTitleStyle({
        transform: `translateX(${titlePosition}%)`,
        opacity: 1,
        transition: "transform 0.5s ease-out",
      });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      handleObserver();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleObserver]);

  return (
    <div ref={animatedContainerRef} className={style.animatedTitleContainer}>
      <h1 style={{ ...animatedTitleStyle, fontSize: `${size}rem` }}>
        {title.title}
      </h1>
    </div>
  );
}
