import SideMenu from "@/components/SideMenu/SideMenu";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative bg-gray-500" style={{backgroundColor: 'lightgray'}}>
      <SideMenu />
      {children}
    </div>
  );
};

export default Layout;
