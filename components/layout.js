import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Ehsan Pourhadi - Digital Developer" />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
