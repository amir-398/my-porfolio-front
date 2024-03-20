"use client";
import Image from "next/image";
import logo from "../../../assets/logo/logo_footer.png";
import PageContainer from "../pageContainer/PageContainer";
import style from "./header.module.css";
export default function Header() {
  return (
    <header className={style.header}>
      <PageContainer>
        <div className={style.headerContainer}>
          <div className={style.logoContainer}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
          <div className={style.center}>
            <ul>
              <li>Accueil</li>
              <li>À propos</li>
              <li>Mes projets</li>
              <li>Mes compétences</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className={style.right}>
            <label className="relative inline-flex items-center justify-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={() => console.log("lol")}
              />
              <p
                style={{
                  position: "absolute",
                  left: "-22px",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                Fr
              </p>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-violet-700"></div>
              <span className="ml-2">
                <span style={{ color: "white", fontWeight: "bold" }}>En</span>
              </span>
            </label>
          </div>
        </div>
      </PageContainer>
    </header>
  );
}
