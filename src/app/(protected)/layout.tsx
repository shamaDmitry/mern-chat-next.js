import { FC } from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className="flex-1"> {children}</main>;
};

export default Layout;
