"use client";
import AnimatedTitle from "@/app/components/ui/animatedTitle/AnimatedTitle";
import Btn from "@/app/components/ui/btn/Btn";
import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import Image from "next/image";
import img from "../../../assets/img/Bahy_img_33.png";
import img_2 from "../../../assets/img/realisation.jpg";
import projectContent from "../../../content/projectCardsContent.json";
import style from "./page.module.css";
export default function ProjectPage({
  params,
}: {
  params: { projectId: string };
}) {
  //get id from url
  const { projectId } = params;

  const projetContent = projectContent.find(
    (project) => project.title == projectId.replace(/-/g, " ")
  );
  const introduction = projetContent?.introduction;
  const needs = projetContent?.needs;
  const solutions = projetContent?.solutions;
  const challenges = projetContent?.challenges;

  return (
    <main>
      <PageContainer>
        <div className={style.projectPageContainer}>
          <div className={style.header}>
            <h1>Site web Bahy</h1>
            <h2>- WEB DESIGN &amp; DÉVELOPPEMENT WEB -</h2>
            <Image src={img} alt="project" width={600} />
            <div className={style.projetInfoContainer}>
              <div>
                <div className={style.separator}></div>
                <h3>Client</h3>
                <p>Bahy</p>
              </div>
              <div>
                <div className={style.separator}></div>
                <h3>Date</h3>
                <p>2022</p>
              </div>
              <div>
                <div className={style.separator}></div>
                <h3>Technologies</h3>
                <p>React, Next.js, TailwindCSS</p>
              </div>
            </div>
          </div>
          <div className={style.contentContainer}>
            <p>{introduction}</p>
            <div className={style.btnContainer}>
              <Btn title="Voir le projet" href="https://bahy.fr/" target />
            </div>
            <div className={style.content}>
              <div className={style.leftContent}>
                <Image src={img_2} alt="image" />
                <Image src={img_2} alt="image" />
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
