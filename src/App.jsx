import React, { useState } from "react";
import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import LoginScreen from "./components/LoginScreen/LoginScreen.jsx";
import StoreScreen from "./components/StoreScreen/StoreScreen.jsx";
import PopularScreen from "./components/PopularScreen/PopularScreen.jsx"; // Importa a nova tela
import "./App.css";

function App() {
  // Adicionado 'popular' aos estados possíveis
  const [currentPage, setCurrentPage] = useState("login");

  const handleLoginSuccess = () => {
    setCurrentPage("store");
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "login":
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
      case "store":
        return <StoreScreen onNavigate={handleNavigation} />;
      // Adicionado o case para a página de populares
      case "popular":
        return <PopularScreen onNavigate={handleNavigation} />;
      case "profile":
        return <HomeScreen onNavigate={handleNavigation} />;
      default:
        return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
    }
  };

  return <div className="App">{renderPage()}</div>;
}

export default App;
