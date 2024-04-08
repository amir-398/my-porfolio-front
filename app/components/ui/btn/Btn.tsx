import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import style from "./btn.module.css";
interface BtnProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  loading?: boolean;
  target?: boolean;
}

const Btn: React.FC<BtnProps> = ({ title, onClick, href, loading, target }) => {
  return (
    <div className={style.btnContainer}>
      {href ? (
        <Link href={href} target={target ? "_blank" : undefined}>
          <button onClick={onClick} className={style.btnUi} disabled={loading}>
            {loading ? <CircularProgress size={30} color="inherit" /> : title}
          </button>
        </Link>
      ) : (
        <button onClick={onClick} className={style.btnUi} disabled={loading}>
          {loading ? <CircularProgress size={30} color="inherit" /> : title}
        </button>
      )}
    </div>
  );
};

export default Btn;
