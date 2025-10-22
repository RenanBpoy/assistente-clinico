import React from "react";
import "../styles/ChatBox.css";

export function ChatBox({ messages }) {
  if (!messages || messages.length === 0) {
    return <p className="empty-chat">vazio</p>;
  }

  return (
    <div className="chatbox">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`chat-msg ${msg.role === "user" ? "user-msg" : "bot-msg"}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}
