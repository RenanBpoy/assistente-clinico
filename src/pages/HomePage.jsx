import React, { useState } from "react";
import { Header } from "../components/containers/Header";
import { BottomNav } from "../components/containers/BottomNav";
import { ChatBox } from "../components/ChatBox";
import { ModelSelector } from "../components/ModelSelector";
import "../styles/HomePage.css";

const HomePage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [model, setModel] = useState("gemini-2.5-flash");

const handleSend = async () => {
  if (!input.trim()) return;

  const userMsg = { role: "user", text: input };
  setMessages((prev) => [...prev, userMsg]);
  setInput("");

  try {
    const res = await fetch("http://127.0.0.1:8000/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input }),
    });

    // Garante que sempre é JSON válido
    const data = await res.json();
    const botText =
      typeof data.answer === "string"
        ? data.answer
        : "❌ Resposta inválida do servidor";

    const botMsg = { role: "bot", text: botText };
    setMessages((prev) => [...prev, botMsg]);
  } catch (err) {
    console.error("Erro ao conectar ao backend:", err);
    setMessages((prev) => [
      ...prev,
      { role: "bot", text: "Erro ao conectar ao servidor 😕" },
    ]);
  }
};



  return (
    <div className="app-container">
      {/* Cabeçalho */}
      <Header section="ChatBot Gemini 2" />

      {/* Corpo do chat */}
      <main className="chat-body">
        <ChatBox messages={messages} />
      </main>

      {/* Rodapé */}
      <footer className="chat-footer">
        <div className="input-row">
          <input
            type="text"
            placeholder="Faça uma pergunta..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="chat-input"
          />
          <button onClick={handleSend} className="send-btn">➤</button>
        </div>
        <ModelSelector model={model} onChange={setModel} />
      </footer>

      {/* Navegação inferior dentro do app */}
      <BottomNav />
    </div>
  );
};

export default HomePage;
