import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import Image from "next/image";
import amir_img from "../../../../assets/img/amir.jpg";
import style from "./presentationSection.module.css";
export default function PresentationSection() {
  return (
    <PageContainer>
      <div className={style.presentationSectionContainer}>
        <div className={style.container}>
          <h2>Qui suis je ?</h2>
          <div className={style.left}>
            <p>
              je me présente : un voyageur des mondes du code, actuellement en
              quête de maîtrise en tant que développeur web full-stack junior
            </p>
            <br />
            <p>
              Avec un arsenal de compétences en constante expansion, j&apos;ai
              plongé profondément dans l&apos;univers du développement web, armé
              d&apos;une connaissance avancée dans une multitude de langages de
              programmation. Mon parcours est pavé de curiosité insatiable et
              d&apos;une soif d&apos;apprendre, me poussant toujours à explorer
              les confins des nouvelles technologies
            </p>
            <br />
            <p>
              Je me distingue par ma capacité à déchiffrer les énigmes les plus
              complexes, cherchant toujours à conjuguer efficacité et élégance
              dans chaque solution apportée. Mais au-delà du code, je suis un
              fervent croyant dans le pouvoir de la communication et de
              l&apos;esprit d&apos;équipe. La collaboration est à mes yeux
              l&apos;étoile polaire, guidant vers la matérialisation
              d&apos;idées innovantes et la réalisation de projets ambitieux.
            </p>
          </div>
          <div className={style.right}>
            <div className={style.amirImgContainer}>
              <Image
                className={style.amirImg}
                src={amir_img}
                alt="amir image"
              />
            </div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
