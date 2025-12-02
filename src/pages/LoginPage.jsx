import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  const backendUrl = "http://127.0.0.1:8000";

  const handleLogin = async () => {
    if (!email || !senha) {
      alert("Preencha email e senha!");
      return;
    }

    try {
      const res = await fetch(`${backendUrl}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: senha }),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(err.detail || "Erro ao fazer login");
        return;
      }

      const data = await res.json();


      alert("Login realizado!");
      navigate("/chat");

    } catch (err) {
      alert("Erro de conexão com o servidor.");
      console.error(err);
    }
  };

  const handleRegister = async () => {
    if (!email || !senha || !confirmar) {
      alert("Preencha todos os campos!");
      return;
    }

    if (senha !== confirmar) {
      alert("As senhas não coincidem!");
      return;
    }

    try {
      const res = await fetch(`${backendUrl}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: senha }),
      });

      if (!res.ok) {
        const err = await res.json();
        alert(err.detail || "Erro ao registrar");
        return;
      }

      alert("Registrado com sucesso! Faça login.");
      setActiveTab("login");

    } catch (err) {
      alert("Erro de conexão com o servidor.");
      console.error(err);
    }
  };

  return (
    <div className="app-container">
      <main className="login-body">

        <div className="login-logo-placeholder">
          <span>Logo</span>
        </div>

        {/* Tabs */}
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

        {/* Inputs */}
        <div className="login-form">
          {activeTab === "login" ? (
            <>
              <input
                type="email"
                placeholder="Email..."
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Senha..."
                className="login-input"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </>
          ) : (
            <>
              <input
                type="email"
                placeholder="Email..."
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                type="password"
                placeholder="Senha..."
                className="login-input"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />

              <input
                type="password"
                placeholder="Confirmar senha..."
                className="login-input"
                value={confirmar}
                onChange={(e) => setConfirmar(e.target.value)}
              />
            </>
          )}
        </div>

        {/* Botão principal */}
        <button
          className="login-btn"
          onClick={activeTab === "login" ? handleLogin : handleRegister}
        >
          {activeTab === "login" ? "Entrar" : "Registrar"}
        </button>
      </main>
    </div>
  );
};

export default LoginPage;
