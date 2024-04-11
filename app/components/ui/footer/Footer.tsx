"use client";
import github_logo from "@/app/assets/img/icons-github.png";
import linkedin_logo from "@/app/assets/img/icons-linkedin.png";
import logo from "@/app/assets/logo/logo_footer.png";
import { useAppSelector } from "@/app/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import PageContainer from "../pageContainer/PageContainer";
import style from "./footer.module.css";
export default function Footer() {
  const lng = useAppSelector((state) => state.langageSlice.langage);
  const content = require(`@/app/content/${lng}/home/contactSection/content.json`);
  const headerContent = require(`@/app/content/${lng}/header/content.json`);
  return (
    <footer className={style.footer}>
      <div style={{ backdropFilter: " blur(10px)" }}>
        <PageContainer>
          <div className={style.footerContainer}>
            <div className={style.left}>
              <Image src={logo} alt="logo" width={100} height={100} />
              <h1>Amir Meberbeche</h1>
              <p>{content.description}</p>
            </div>
            <div className={style.center}>
              <h2> {content.title}</h2>
              <ul>
                {headerContent.map(
                  (item: Record<string, string | number>, index: number) => (
                    <li key={index}>
                      <Link href={`#${String(item.sectionId)}`}>
                        {item.title}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className={style.right}>
              <Link
                href={"https://www.linkedin.com/in/amir-meberbeche-337968249/"}
                target="_blanck"
              >
                <Image
                  src={linkedin_logo}
                  alt="linkedin"
                  width={50}
                  height={50}
                />
              </Link>
              <Link href={"https://github.com/amir-398"} target="_blanck">
                <Image src={github_logo} alt="guthub" width={50} height={50} />
              </Link>
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
