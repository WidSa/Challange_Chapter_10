import Head from "next/head";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
