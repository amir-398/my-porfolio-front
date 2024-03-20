import React from "react";
import style from "./pageContainer.module.css";
export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={style.pageContainer}>{children}</div>;
}
