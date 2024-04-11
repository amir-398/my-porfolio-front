"use client";
import { setIsModalVisible } from "@/app/redux/Slices/modalIsVisibleSlice";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import astronaute_img from "../../../assets/img/astronaute_Modal.png";
import moon from "../../../assets/img/moon_modal.png";
import star from "../../../assets/img/star.png";
import style from "./modal.module.css";
export default function Modal() {
  const dispath = useAppDispatch();
  const isVisible = useAppSelector(
    (state) => state.modalIsVisibleSlice.isVisible
  );
  const handleRandomStars = () => {
    const stars = [];
    for (let i = 0; i < 50; i++) {
      const top = Math.floor(Math.random() * 95) + 1;
      const left = Math.floor(Math.random() * 95) + 1;
      const size = Math.floor(Math.random() * 6) + 5;

      stars.push(
        <Image
          className={style.star}
          style={{ top: `${top}%`, left: `${left}%` }}
          src={star}
          alt="star"
          width={size}
        />
      );
    }
    return stars;
  };

  const handleCloseModal = () => {
    dispath(setIsModalVisible(false));
    window.location.reload();
  };
  return (
    <div
      className={[
        style.modalContainer,
        isVisible != null && isVisible ? style.modalVisible : undefined,
      ].join(" ")}
    >
      <div className={style.modalContent}>
        <IoClose onClick={handleCloseModal} size={30} color="#fff" />
        <Image
          className={style.astronaute_img}
          src={astronaute_img}
          alt="astronaute"
        />
        <div>
          <h2>Message Envoyé !</h2>
          <p>Merci pour votre message ! Nous l&apos;avons bien reçu.</p>
        </div>

        {handleRandomStars()}
        <Image className={style.moon} src={moon} alt="moon" />
      </div>
    </div>
  );
}
