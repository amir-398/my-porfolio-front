import Link from "next/link";
import style from "./btn.module.css";

interface BtnProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
}

const Btn: React.FC<BtnProps> = ({ title, onClick, href }) => {
  return (
    <div className={style.btnContainer}>
      {href ? (
        <button onClick={onClick} className={style.btnUi}>
          <Link href={href}>{title}</Link>
        </button>
      ) : (
        <button onClick={onClick} className={style.btnUi}>
          <div className={style.btnHoverBg}></div>
          {title}
        </button>
      )}
    </div>
  );
};

export default Btn;
