import React from "react";
import NavbarTop from "./ui/Navbar";
import Footer from "./ui/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavbarTop />
      <main>{children}</main>
      <Footer />
    </>
  );
}
