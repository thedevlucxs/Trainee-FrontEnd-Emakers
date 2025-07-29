import React, { useState } from "react";
import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import LoginScreen from "./components/LoginScreen/LoginScreen.jsx";
import StoreScreen from "./components/StoreScreen/StoreScreen.jsx"; // Importar a nova tela
import "./App.css";

function App() {
  // Estados possíveis: 'login', 'store', 'profile'
  const [currentPage, setCurrentPage] = useState("login");

  // Navega para a StoreScreen após o login
  const handleLoginSuccess = () => {
    setCurrentPage("store");
  };

  // Navega entre as páginas a partir da Navbar/outros links
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  // Renderiza a página correta com base no estado
  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
      case "store":
        return <StoreScreen onNavigate={handleNavigation} />;
      case "profile":
        return <HomeScreen onNavigate={handleNavigation} />;
      default:
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
