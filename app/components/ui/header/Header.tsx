"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import logo from "../../../assets/logo/logo_footer.png";
import PageContainer from "../pageContainer/PageContainer";
import style from "./header.module.css";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = " hidden hidden";
    else document.body.style.overflow = "hidden auto";
  }, [isMenuOpen]);
  return (
    <header className={style.header}>
      <div className={style.bg}></div>
      <PageContainer>
        <div className={style.headerContainer}>
          <div className={style.logoContainer}>
            <Image src={logo} alt="logo" width={100} height={100} />
          </div>
          <div className={style.center}>
            <ul className={style.navList}>
              <li>
                <Link href="#landing-section"> Accueil</Link>
              </li>
              <li>
                <Link href="#presentation"> À propos</Link>
              </li>
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
          <div className={style.rightMobile}>
            <input
              type="checkbox"
              role="button"
              aria-label="Display the menu"
              className={style.hamburgerMenuIcon}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>
      </PageContainer>
      <Menu
        className={style.hamburgerMenu}
        isOpen={isMenuOpen}
        width={"100%"}
        noOverlay
        disableOverlayClick
        customBurgerIcon={false}
      >
        <Link href={"/"}>Accueil</Link>
        <Link href={"/"}>À propos</Link>
        <Link href={"/"}>Mes projets</Link>
        <Link href={"/"}>Mes compétences</Link>
        <Link href={"/"}>Contact</Link>
      </Menu>
    </header>
  );
}
