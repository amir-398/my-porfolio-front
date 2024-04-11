import PageContainer from "@/app/components/ui/pageContainer/PageContainer";
import { useAppSelector } from "@/app/redux/hooks";
import Image from "next/image";
import amir_img from "../../../../assets/img/amir.jpg";
import style from "./presentationSection.module.css";
export default function PresentationSection() {
  const lng = useAppSelector((state) => state.langageSlice.langage);
  const content = require(`@/app/content/${lng}/home/presentationSection/content.json`);
  return (
    <PageContainer>
      <div className={style.presentationSectionContainer}>
        <div className={style.container}>
          <div className={style.left}>
            <h3>{content.label}</h3>
            <h2>{content.title}</h2>
            <p>{content.description[0]}</p>
            <br />
            <p>{content.description[1]}</p>
            <br />
            <p>{content.description[2]}</p>
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
