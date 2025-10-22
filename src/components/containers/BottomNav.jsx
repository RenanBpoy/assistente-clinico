import React from "react";
import { Link } from "react-router-dom";
import "../../styles/BottomNav.css";

export function BottomNav() {
  return (
    <nav className="bottom-nav">
      <Link to="/">🏠</Link>
      <Link to="/page1">📄</Link>
      <Link to="/page2">⚙️</Link>
    </nav>
  );
}
