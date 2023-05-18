import { ReactNode } from "react";
import Footer from "./footer/index";
import Header from "./header/index";
import Head from "next/head";

type Props = {
  children?: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Next.js + TypeScript + Sass + Bootstrap</title>
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
