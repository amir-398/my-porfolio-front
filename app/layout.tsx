import type { Metadata } from "next";
import { Suspense } from "react";
import QueryProvider from "./QueryProvider";
import ReduxStoreProvider from "./ReduxStoreProvider";
import Footer from "./components/ui/footer/Footer";
import Header from "./components/ui/header/Header";
import LoadingComponent from "./components/ui/loadingComponent/LoadingComponent";
import Modal from "./components/ui/modalComponent/Modal";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amir Meberbeche: Développeur web Junior",
  description:
    "Développeur web junior passionné par la création de solutions digitales efficaces et innovantes.Formé en programmation, je possède une maîtrise approfondie de technologies clés.Mon objectif est de développer des expériences utilisateur fluides et réactives, en mettant à profit mes compétences techniques pour contribuer à des projets dynamiques et créatifs.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

      <body>
        <ReduxStoreProvider>
          <QueryProvider>
            <Suspense fallback={<LoadingComponent />}>
              <Modal />
              <Header />
              {children}
              <Footer />
            </Suspense>
          </QueryProvider>
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
