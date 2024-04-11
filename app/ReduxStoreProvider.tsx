"use client";
import { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
export default function ReduxStoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lng = localStorage.getItem("langage");

  useEffect(() => {
    if (lng == null) {
      console.log("langage is null");
      localStorage.setItem("langage", "fr");
    }
  }, [lng]);
  return <Provider store={store}>{children}</Provider>;
}
