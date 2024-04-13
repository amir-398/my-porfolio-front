"use client";
import AnimatedTitle from "@/app/components/ui/animatedTitle/AnimatedTitle";
import Btn from "@/app/components/ui/btn/Btn";
import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import style from "./page.module.css";
import axios from "axios";

export default function ProjectPage() {
  //get id from url
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");
  //get language from local storage
  const lng = localStorage.getItem("langage");
  const projectContent = require(`@/app/content/${lng}/projects/content.json`);
  const projetContent = projectContent.find(
    (project: any) => project.id == projectId
  );
  const title = projetContent?.title;
  const introduction = projetContent?.introduction;
  const client = projetContent?.client;
  const projectUrl = projetContent?.projectUrl;
  const date = projetContent?.date;
  const technologies = projetContent?.technologies.join(", ");
  const needs = projetContent?.needs;
  const solutions = projetContent?.solutions;
  const challenges = projetContent?.challenges;
  const image = projetContent?.image;

  return (
    <main>
      <PageContainer>
        <div className={style.projectPageContainer}>
          <div className={style.header}>
            <h1>{title} </h1>
            <h2>- WEB DESIGN &amp; DÉVELOPPEMENT WEB -</h2>

            <Image src={image ?? ""} width={600} height={600} alt="lol" />
            <div className={style.projetInfoContainer}>
              <div>
                <div className={style.separator}></div>
                <h3>Client</h3>
                <p>{client}</p>
              </div>
              <div>
                <div className={style.separator}></div>
                <h3>Date</h3>
                <p>{date} </p>
              </div>
              <div>
                <div className={style.separator}></div>
                <h3>Technologies</h3>
                <p>{technologies}</p>
              </div>
            </div>
          </div>
          <div className={style.contentContainer}>
            <p>{introduction}</p>
            <div className={style.btnContainer}>
              {projectUrl && (
                <Btn title="Voir le projet" href={projectUrl} target />
              )}
            </div>
            <div className={style.content}>
              <div className={style.leftContent}>
                <Image
                  src={projetContent?.img_1 ?? ""}
                  width={600}
                  height={600}
                  alt="image"
                />
                <Image
                  src={projetContent?.img_2 ?? ""}
                  width={600}
                  height={600}
                  alt="image"
                />
                <Image
                  src={projetContent?.img_3 ?? ""}
                  width={600}
                  height={600}
                  alt="image"
                />
              </div>
              <div className={style.rightContent}>
                <div className={style.animatedTitleContainer}>
                  <AnimatedTitle
                    title={{ id: 1, title: "Les besoins" }}
                    size={4}
                  />
                </div>
                <h3>Les besoins</h3>
                <p>
                  Le projet a été initié pour répondre à des besoins clairement
                  identifiés, visant à renforcer la connexion entre intervenants
                  et écoles de formation :
                </p>
                <br />
                <div
                  className={style.htmlContent}
                  dangerouslySetInnerHTML={{ __html: needs ?? "" }}
                />
                <div className={style.animatedTitleContainer}>
                  <AnimatedTitle
                    title={{ id: 1, title: "Les solutions" }}
                    size={4}
                  />
                </div>
                <h3>Les solutions</h3>
                <p>
                  Pour répondre efficacement aux besoins identifiés, le projet a
                  mis en œuvre des solutions innovantes et adaptées :
                </p>
                <br />
                <div
                  className={style.htmlContent}
                  dangerouslySetInnerHTML={{ __html: solutions ?? "" }}
                />
                <div className={style.animatedTitleContainer}>
                  <AnimatedTitle
                    title={{ id: 1, title: "Les enjeux" }}
                    size={4}
                  />
                </div>
                <h3>Les enjeux</h3>
                <p>
                  Ce projet comportait des défis significatifs, tant sur le plan
                  stratégique que technique :
                </p>
                <br />
                <div
                  className={style.htmlContent}
                  dangerouslySetInnerHTML={{ __html: challenges ?? "" }}
                />
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
    </main>
  );
}
