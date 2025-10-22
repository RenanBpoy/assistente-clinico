import React, { useState } from "react";
import { Header } from "../components/containers/Header";
import { BottomNav } from "../components/containers/BottomNav";
import "../styles/Page1.css";

const Page1 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""}`}>
      <Header section="Biblioteca" />

      <main className="library-body">
        {/* Barra superior com pesquisa e botão de tema */}
        <div className="library-top">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Pesquisar..."
              className="search-input"
            />
          </div>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Lista de cards */}
        <div className="library-list">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="library-card">
              <p className="item-title">Nome do Item</p>
              <p className="item-date">Data de criação</p>
            </div>
          ))}
        </div>

        {/* Botão Ver Chat */}
        <button className="chat-btn">Ver Chat</button>
      </main>

      <BottomNav />
    </div>
  );
};

export default Page1;
