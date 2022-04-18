import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
