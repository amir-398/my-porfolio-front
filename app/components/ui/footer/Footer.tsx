import github_logo from "@/app/assets/img/icons-github.png";
import linkedin_logo from "@/app/assets/img/icons-linkedin.png";
import logo from "@/app/assets/logo/logo_footer.png";
import Image from "next/image";
import PageContainer from "../pageContainer/PageContainer";
import style from "./footer.module.css";
export default function Footer() {
  return (
    <footer className={style.footer}>
      <div style={{ backdropFilter: " blur(10px)" }}>
        <PageContainer>
          <div className={style.footerContainer}>
            <div className={style.left}>
              <Image src={logo} alt="logo" width={100} height={100} />
              <h1>Amir Meberbeche</h1>
              <p>
                un voyageur des mondes du code, actuellement en quête de
                maîtrise en tant que développeur web full-stack junior
              </p>
            </div>
            <div className={style.center}>
              <h2>Plan du site</h2>
              <ul>
                <li>
                  <a href="#home">Accueil</a>
                </li>
                <li>
                  <a href="#about">A propos</a>
                </li>
                <li>
                  <a href="#skills">Compétences</a>
                </li>
                <li>
                  <a href="#projects">Projets</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className={style.right}>
              <Image
                src={linkedin_logo}
                alt="linkedin"
                width={50}
                height={50}
              />
              <Image src={github_logo} alt="linkedin" width={50} height={50} />
            </div>
          </div>
        </PageContainer>
      </div>
      <div style={{ backgroundColor: "rgba(0,0,0,0.8)" }}>
        <PageContainer>
          <div className={style.copyrightsContainer}>
            <p>Copyrights © 2024.Amir Meberbeche</p>
          </div>
        </PageContainer>
      </div>
    </footer>
  );
}
