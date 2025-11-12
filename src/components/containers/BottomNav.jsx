import React from "react";
import { Link } from "react-router-dom";
import "../../styles/BottomNav.css";
// Importe os ícones
import { MdSearch, MdMedicalInformation, MdSettings } from "react-icons/md";

export function BottomNav() {
  return (
    <nav className="bottom-nav-floating">
      <div className="bottom-nav-bar">
        <Link to="/" className="nav-icon-btn">
          <MdSearch size={24} />
        </Link>
        <Link to="/page1" className="nav-icon-btn">
          <MdMedicalInformation size={24} />
        </Link>
        <Link to="/page2" className="nav-icon-btn">
          <MdSettings size={24} />
        </Link>
      </div>
    </nav>
  );
}