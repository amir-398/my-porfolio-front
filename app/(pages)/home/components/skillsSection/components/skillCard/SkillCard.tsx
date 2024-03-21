import style from "./skillCard.module.css";
export default function SkillCard({
  icon,
  title,
  borderColor,
}: {
  icon: React.ReactNode;
  title: string;
  borderColor: string;
}) {
  return (
    <div
      className={style.skillCard}
      style={{
        border: `3px solid ${borderColor}`,
        boxShadow: `0 0 10px ${borderColor}`,
      }}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
}
