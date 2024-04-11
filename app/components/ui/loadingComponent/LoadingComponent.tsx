import style from "./loadingComponent.module.css";
export default function LoadingComponent() {
  return (
    <div className={style.loadingContainer}>
      <div className={style.loadingWrapper}></div>
    </div>
  );
}
