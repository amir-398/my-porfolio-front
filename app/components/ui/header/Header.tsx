"use client";
import { setActiveSection } from "@/app/redux/Slices/activeSectionSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import logo from "../../../assets/logo/logo_footer.png";
import PageContainer from "../pageContainer/PageContainer";
import style from "./header.module.css";

export default function Header() {
  const lng = useAppSelector((state) => state.langageSlice.langage);
  const headerContent = require(`@/app/content/${lng}/header/content.json`);
  // use pathname
  const dispatch = useAppDispatch();
  const checkboxRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const currentUrl = pathname.split("/")[1];
  const [isMenuOpen, setIsMenuOpen] = useState<boolean | null>(null);

  const activeSection = useAppSelector(
    (state) => state.activeSectionSlice.activeSection
  );

  useEffect(() => {
    if (currentUrl == "mes-projets") {
      dispatch(setActiveSection("projects"));
    }
  }, [currentUrl]);

  // if the menu is open, disable the scroll
  useEffect(() => {
    if (isMenuOpen) document.body.style.overflow = " hidden hidden";
    else document.body.style.overflow = "hidden auto";
  }, [isMenuOpen]);

  // handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector("header")?.clientHeight;
      window.scrollTo({
        top: section.offsetTop - headerHeight!,
        behavior: "smooth",
      });
    }
  };

  const currentHash = typeof window !== "undefined" && window.location.hash;

  useEffect(() => {
    if (currentHash) {
      const sectionId = currentHash.replace("#", "");
      scrollToSection(sectionId);
    }
  }, [currentHash]);
  const getInitialCheckboxState = () => {
    return lng === "en" ? true : false;
  };
  // langage checkbox
  const [ischeckBoxChecked, setIscheckBoxChecked] = useState<boolean>(
    getInitialCheckboxState()
  );

  const handleLangageChange = () => {
    const newCheckedState = !ischeckBoxChecked;
    setIscheckBoxChecked(newCheckedState);
    localStorage.setItem("langage", newCheckedState ? "en" : "fr");
    window.location.reload();
  };

  useEffect(() => {
    const langageStorage = localStorage.getItem("langage");
    setIscheckBoxChecked(langageStorage === "en");
  }, []);

  return (
    <header className={style.header}>
      <div className={style.bg}></div>
      <PageContainer>
        <div className={style.headerContainer}>
          <div className={style.logoContainer}>
            <Link href="/">
              <Image src={logo} alt="logo" width={100} height={100} />
            </Link>
          </div>
          <div className={style.center}>
            <ul className={style.navList}>
              {headerContent.map((item: Record<string, string | number>) => (
                <li
                  key={item.id}
                  className={
                    activeSection === item.sectionId ? style.active : undefined
                  }
                >
                  <Link href={`/#${item.sectionId}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={style.right}>
            <label className="relative inline-flex items-center justify-center cursor-pointer">
              <input
                ref={checkboxRef}
                type="checkbox"
                value=""
                className="sr-only peer"
                onClick={handleLangageChange}
                checked={ischeckBoxChecked}
                readOnly
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
              checked={isMenuOpen != null ? isMenuOpen : false}
            />
          </div>
        </div>
      </PageContainer>
      <div
        className={[
          style.hamburgerMenu,
          isMenuOpen
            ? style.visible
            : isMenuOpen != null
            ? style.hidden
            : undefined,
        ].join(" ")}
      >
        <label className="relative inline-flex items-center justify-center cursor-pointer">
          <input
            ref={checkboxRef}
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={handleLangageChange}
            checked={ischeckBoxChecked}
            readOnly
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
        <ul>
          {headerContent.map((item: Record<string, string | number>) => (
            <li
              key={item.id}
              className={
                activeSection === item.sectionId ? style.active : undefined
              }
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href={`/#${item.sectionId}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
