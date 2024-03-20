import style from "./btn.module.css";

interface BtnProps {
  title: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Btn: React.FC<BtnProps> = ({ title, onClick }) => {
  return (
    <div className={style.btnContainer}>
      <button onClick={onClick} className={style.btnUi}>
        <div className={style.btnHoverBg}></div>
        {title}
      </button>
    </div>
  );
};

export default Btn;
