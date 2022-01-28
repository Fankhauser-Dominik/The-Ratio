import React from "react";
import "./Header.scss";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import HeaderCarousel from "../HeaderCarousel/HeaderCarousel";

export default function Header() {
  return (
    <header className="Header">
      <Navbar />
      <Sidebar />
      <div className="RightLine"></div>
      <HeaderCarousel />
      <div className="BottomLine"></div>
    </header>
  );
}
