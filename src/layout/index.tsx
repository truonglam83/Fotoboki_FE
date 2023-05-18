import { ReactNode } from "react";
import Footer from "./footer/index";
import Header from "./header/index";

type Props = {
  children?: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  );
}
