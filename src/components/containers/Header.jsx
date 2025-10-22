import React from "react";
import "../../styles/Header.css";

export function Header({ section }) {
  return (
    <header className="app-header">
      <button className="back-btn">←</button>
      <h1 className="header-title">{section}</h1>
    </header>
  );
}
