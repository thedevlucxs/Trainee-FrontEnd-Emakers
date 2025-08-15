import React, { useState } from "react";
import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import LoginScreen from "./components/LoginScreen/LoginScreen.jsx";
import StoreScreen from "./components/StoreScreen/StoreScreen.jsx";
import PopularScreen from "./components/PopularScreen/PopularScreen.jsx";
import CreateAccountScreen from "./components/CreateAccountScreen/CreateAccountScreen.jsx";
import ForgotPasswordScreen from "./components/ForgotPasswordScreen/ForgotPasswordScreen.jsx";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("login"); //armazena a página atual

  const handleLoginSuccess = () => {
    setCurrentPage("store"); //feito o login, vai para a página de lançamentos
    window.scrollTo(0, 0);
  };

  const handleNavigation = (page) => {
    //passa pra navbar e o footer para navegar entre as telas
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    //de acordo com a currentpage, renderiza a tela correspondente
    switch (currentPage) {
      case "login":
        return (
          <LoginScreen
            onLoginSuccess={handleLoginSuccess}
            onNavigate={handleNavigation}
          />
        );
      case "createAccount":
        return <CreateAccountScreen onNavigate={handleNavigation} />;
      case "forgotPassword":
        return <ForgotPasswordScreen onNavigate={handleNavigation} />;
      case "store":
        return <StoreScreen onNavigate={handleNavigation} />;
      case "popular":
        return <PopularScreen onNavigate={handleNavigation} />;
      case "profile":
        return <HomeScreen onNavigate={handleNavigation} />;
      default:
        return (
          <LoginScreen
            onLoginSuccess={handleLoginSuccess}
            onNavigate={handleNavigation}
          />
        );
    }
  };

  //retorna o resultado da renderização da página atual
  return <div className="App">{renderPage()}</div>;
}

export default App;
