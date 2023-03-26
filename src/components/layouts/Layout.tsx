import React from "react";
import Navbar from "@/components/ui/navbar/Navbar";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <div className="h-full bg-slate-400">
      <Navbar />
      <main className="container mx-auto py-8">{children}</main>
      <footer className="bg-gray-800 text-white py-4">
        {/* Aquí puedes incluir tu footer */}
      </footer>
    </div>
  );
};

export default Layout;
