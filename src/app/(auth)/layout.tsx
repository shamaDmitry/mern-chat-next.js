import { Logo } from "@/src/components/base/logo";
import { ThemeToggle } from "@/src/components/theme-toggle";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex-1 relative">
      <div className="flex gap-4 items-center justify-between p-5">
        <Logo />

        <ThemeToggle />
      </div>

      {children}
    </main>
  );
};

export default Layout;
