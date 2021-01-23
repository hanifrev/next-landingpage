import React from "react";
import Nav from "./Nav";
import MainTitle from "./MainTitle";

export default function Layout({ children }) {
  return (
    <div className="px-0 md:px-4 lg:px-32 xl:px-36">
      <Nav />
      <MainTitle />
      {children}
    </div>
  );
}
