"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import { setLangage } from "./redux/Slices/langageSlice";
import { useAppDispatch } from "./redux/hooks";
const queryClient = new QueryClient();

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const [lng, setLng] = useState<string | null>(null);
  useEffect(() => {
    const lng = localStorage.getItem("langage");
    if (lng === null) localStorage.setItem("langage", "fr");
    setLng(lng);
  }, []);

  useEffect(() => {
    if (lng !== null) {
      dispatch(setLangage(lng));
    }
  }, [lng, dispatch]);
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
