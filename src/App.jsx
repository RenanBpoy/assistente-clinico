import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import LoginPage from "./pages/LoginPage"; // 1. Importe a nova página
import "./styles/globals.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* 2. Rota de Login (agora é a principal) */}
        <Route path="/" element={<LoginPage />} />

        {/* 3. Página de Chat (movida de / para /chat) */}
        <Route path="/chat" element={<HomePage />} />

        {/* Biblioteca */}
        <Route path="/page1" element={<Page1 />} />

        {/* Página genérica (configurações, por exemplo) */}
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;