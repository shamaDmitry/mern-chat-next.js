import { Footer } from "@/src/components/base/footer";
import { Header } from "@/src/components/base/header";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />

      <main className="flex-1"> {children}</main>

      <Footer />
    </>
  );
};

export default Layout;
