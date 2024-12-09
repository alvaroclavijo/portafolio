import SideMenu from "@/components/SideMenu/SideMenu";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-500" style={{backgroundColor: 'lightgray'}}>
      <SideMenu />
      <main className="relative ml-[80px]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
