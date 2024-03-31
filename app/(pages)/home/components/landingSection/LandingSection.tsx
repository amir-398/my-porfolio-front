"use client";
import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import Image from "next/image";
import earth_img from "../../../../assets/img/earth.png";
import rocket_img from "../../../../assets/img/rocket.png";
import Btn from "../../../../components/ui/btn/Btn";
import style from "./landingSection.module.css";
export default function LandingSection() {
  return (
    <>
      <Image
        className={style.earthImg}
        src={earth_img}
        alt="terre"
        width={200}
        height={200}
      />
      <PageContainer>
        <div className={style.landingSectionContainer}>
          <h2>AMIR MEBERBECHE</h2>
          <h1>Développeur web junior</h1>
          <h3>
            Embarquez pour une odyssée numérique à travers les galaxies de ma
            créativité. <br />
            je vous invite à explorer les univers que j&apos;ai façonnés en tant
            que développeur web.
          </h3>
          <div className={style.btnContainer}>
            <Btn title="Commencer la mission" href="#presentation" />
          </div>
          <Image
            className={style.rocketImg}
            src={rocket_img}
            alt="rocket"
            width={50}
            height={50}
          />
        </div>
      </PageContainer>
    </>
  );
}
