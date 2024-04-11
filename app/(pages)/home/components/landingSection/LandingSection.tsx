"use client";
import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import Image from "next/image";
import earth_img from "../../../../assets/img/earth.png";
import rocket_img from "../../../../assets/img/rocket.png";
import Btn from "../../../../components/ui/btn/Btn";
import style from "./landingSection.module.css";
import { useAppSelector } from "@/app/redux/hooks";
export default function LandingSection() {
  const lng = useAppSelector((state) => state.langageSlice.langage);
  const content = require(`@/app/content/${lng}/home/landingSection/content.json`);
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
          <h2> {content.title_1} </h2>
          <h1>{content.title_2}.</h1>
          <h3>{content.description}</h3>
          <div className={style.btnContainer}>
            <Btn title={content.btnText} href="#presentation" />
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
