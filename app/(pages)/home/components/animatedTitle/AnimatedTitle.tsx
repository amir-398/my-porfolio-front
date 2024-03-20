"use client";
import { useEffect, useRef, useState } from "react";
import style from "./animatedTitle.module.css";
export default function AnimatedTitle({ title }: { title: string }) {
  const animatedContainerRef = useRef<HTMLDivElement>(null);
  const [animatedTitleStyle, setAnimatedTitleStyle] = useState({
    transform: "translateX(100%)",
    opacity: 0,
    transition: "transform 0.5s",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Déterminer le comportement en fonction du titre
          let translateX;

          setAnimatedTitleStyle({
            transform: `translateX(${translateX}%)`,
            transition: "transform 0.5s",
            opacity: 1,
          });
        });
      },
      {
        rootMargin: "0px",
        threshold: Array.from({ length: 101 }, (_, i) => i * 0.01),
      }
    );

    if (animatedContainerRef.current) {
      observer.observe(animatedContainerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [title]); // Ajoutez title comme dépendance si son changement doit ajuster l'animation

  return (
    <div ref={animatedContainerRef} className={style.animatedTitleContainer}>
      <h1 style={animatedTitleStyle}>{title}</h1>
    </div>
  );
}
