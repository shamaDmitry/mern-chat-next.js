import { ThemeToggle } from "@/src/components/theme-toggle";
import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex-1 relative">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      {children}
    </main>
  );
};

export default Layout;
