import CircularProgress from "@mui/material/CircularProgress";
import Link from "next/link";
import style from "./btn.module.css";
interface BtnProps {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: string;
  loading?: boolean;
}

const Btn: React.FC<BtnProps> = ({ title, onClick, href, loading }) => {
  return (
    <div className={style.btnContainer}>
      {href ? (
        <button onClick={onClick} className={style.btnUi} disabled={loading}>
          <Link href={href}>
            {loading ? <CircularProgress size={30} color="inherit" /> : title}
          </Link>
        </button>
      ) : (
        <button onClick={onClick} className={style.btnUi} disabled={loading}>
          {loading ? <CircularProgress size={30} color="inherit" /> : title}
        </button>
      )}
    </div>
  );
};

export default Btn;
