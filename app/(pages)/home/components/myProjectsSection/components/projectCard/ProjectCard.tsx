"use client";
import img from "@/app/assets/img/project.webp";
import Btn from "@/app/components/ui/btn/Btn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import style from "./projectCard.module.css";
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  const { title, description, image } = props;
  const animatedContainerRef = useRef<HTMLDivElement | null>(null);
  const [animatedStyle, setAnimatedStyle] = useState({
    transform: "scale(0.8)",
    opacity: 0,
    transition: "transform 0.5s",
  });
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // L'élément devient visible
        if (entry.isIntersecting) {
          setAnimatedStyle({
            transform: "scale(1)",
            opacity: 1,
            transition: "transform 0.5s",
          });
          // Optionnel : vous pouvez arrêter d'observer après la première animation
          observer.unobserve(animatedContainerRef.current as Element);
        }
      },
      {
        threshold: 0.3, // 30% de l'élément est visible
      }
    );

    if (animatedContainerRef.current) {
      observer.observe(animatedContainerRef.current);
    }

    return () => {
      if (animatedContainerRef.current) {
        observer.unobserve(animatedContainerRef.current);
      }
    };
  }, []);

  return (
    <div
      className={style.projectCardContainer}
      ref={animatedContainerRef}
      style={animatedStyle}
    >
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <Btn title="Voir le projet" onClick={() => console.log("")} />
      </div>
      <div>
        <Image src={img} alt={title} width={500} height={500} />
      </div>
    </div>
  );
}
