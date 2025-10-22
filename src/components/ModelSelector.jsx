import React from "react";
import "../styles/ModelSelector.css";

export function ModelSelector({ model, onChange }) {
  return (
    <select
      value={model}
      onChange={(e) => onChange(e.target.value)}
      className="model-select"
    >
      <option value="gemini-2.5-flash">Gemini 2.5 flash</option>
      <option value="gemini-1.5-pro">Gemini 1.5 pro</option>
    </select>
  );
}
