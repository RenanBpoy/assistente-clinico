import React from "react";
import "../../styles/Header.css";
import { MdArrowBack } from "react-icons/md";

export function Header({ section, showBackButton = true }) {
  return (
    <header className="app-header">
      {/* O botão só aparece se 'showBackButton' for true */}
      {showBackButton && (
        <button className="back-btn">
          <MdArrowBack size={22} />
        </button>
      )}
      <h1 className="header-title">{section}</h1>
    </header>
  );
}