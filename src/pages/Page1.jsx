import React from "react";
import { Header } from "../components/containers/Header";
import { BottomNav } from "../components/containers/BottomNav";
import "../styles/Page1.css";
import { MdSearch, MdWbSunny, MdModeNight } from "react-icons/md";

const Page1 = () => {
  return (
    <div className="app-container">
      {/* showBackButton={false} esconde o botão "voltar" */}
      <Header section="Biblioteca" showBackButton={false} />

      <main className="library-body">
        {/* 1. Botão de Tema (no topo, à direita) */}
        <div className="theme-toggle-container">
          <div className="theme-toggle-track">
            {/* Ícones de Sol e Lua */}
            <span>
              <MdWbSunny size={20} />
            </span>
            <span>
              <MdModeNight size={20} />
            </span>
          </div>
          {/* Travado na posição light (esquerda) */}
          <div className="theme-toggle-thumb"></div>
        </div>

        {/* 2. Barra de Pesquisa (abaixo) */}
        <div className="search-bar">
          <span className="search-icon">
            <MdSearch size={22} />
          </span>
          <input
            type="text"
            placeholder="Pesquisar..."
            className="search-input"
          />
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