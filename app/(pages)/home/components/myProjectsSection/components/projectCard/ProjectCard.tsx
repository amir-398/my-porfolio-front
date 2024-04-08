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
  const animatedContainerRef = useRef<HTMLDivElement>(null);
  const [isCardVisible, setIsCardVisible] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const animatedContainerRefCurrent = animatedContainerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsCardVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    if (animatedContainerRef.current) {
      observer.observe(animatedContainerRefCurrent as Element);
    }

    return () => {
      if (animatedContainerRefCurrent) {
        observer.unobserve(animatedContainerRefCurrent as Element);
      }
    };
  }, []);

  return (
    <div
      className={[
        style.projectCardContainer,
        isCardVisible
          ? style.projectCardVisible
          : isCardVisible != undefined
          ? style.projectCardInvisible
          : undefined,
      ].join(" ")}
      ref={animatedContainerRef}
    >
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className={style.btnContainer}>
          <Btn
            title="Voir le projet"
            href={`/mes-projets/${title.replace(/\s+/g, "-")}`}
          />
        </div>
      </div>
      <div>
        <Image src={img} alt={title} width={500} height={500} />
      </div>
    </div>
  );
}
