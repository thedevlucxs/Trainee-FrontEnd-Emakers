import React, { useState } from "react";
import HomeScreen from "./components/HomeScreen/HomeScreen.jsx";
import LoginScreen from "./components/LoginScreen/LoginScreen.jsx";
import "./App.css"; // Podemos remover o conteúdo deste CSS depois, se quisermos

function App() {
  // 1. Criamos um estado para saber qual página está ativa.
  //    Começamos na página 'login'.
  const [currentPage, setCurrentPage] = useState("login");

  // 2. Esta função será chamada pelo LoginScreen para nos avisar que o login foi feito.
  //    Ela simplesmente muda o estado para 'home'.
  const handleLoginSuccess = () => {
    setCurrentPage("home");
  };

  // 3. Renderização Condicional:
  //    Verificamos o valor de 'currentPage'.
  //    - Se for 'login', mostramos o LoginScreen.
  //    - Se for qualquer outra coisa (no nosso caso, 'home'), mostramos o HomeScreen.
  return (
    <div className="App">
      {currentPage === "login" ? (
        <LoginScreen onLoginSuccess={handleLoginSuccess} />
      ) : (
        <HomeScreen />
      )}
    </div>
  );
}

export default App;
