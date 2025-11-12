import React, { useState } from "react";
import "../styles/LoginPage.css"; 

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="app-container">
      <main className="login-body">
        
        <div className="login-logo-placeholder">
          <span>Logo</span>
        </div>

        <div className="login-tabs">
          <button
            className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Register
          </button>
        </div>

        <div className="login-form">
          {activeTab === "login" ? (
            <>
              <input
                type="Email"
                placeholder="email..."
                className="login-input"
              />
              <input
                type="password"
                placeholder="••••••••"
                className="login-input"
              />
            </>
          ) : (
            <>
              <input
                type="email"
                placeholder="Email..."
                className="login-input"
              />
              <input
                type="password"
                placeholder="Senha..."
                className="login-input"
              />
              <input
                type="password"
                placeholder="Confirmar Senha..."
                className="login-input"
              />
            </>
          )}
        </div>

        <button className="login-btn">
          Neumorphic Button
        </button>
      </main>
    </div>
  );
};

export default LoginPage;