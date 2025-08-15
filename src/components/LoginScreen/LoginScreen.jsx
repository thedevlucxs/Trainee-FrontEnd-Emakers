import React, { useState } from "react";
import styles from "./LoginScreen.module.css";
import tema from "../../assets/icons/tema.svg";
import setaLogin from "../../assets/icons/setaLogin.svg";

// Recebe onLoginSuccess para ir para a loja e onNavigate para as outras telas
function LoginScreen({ onLoginSuccess, onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onLoginSuccess();
  };

  // Funções para navegar para as novas telas
  const handleNavigateToCreateAccount = (event) => {
    event.preventDefault();
    onNavigate("createAccount");
  };

  const handleNavigateToForgotPassword = (event) => {
    event.preventDefault();
    onNavigate("forgotPassword");
  };

  return (
    <main className={styles.container}>
      <div className={styles.formSection}>
        <h1 className={styles.mainHeading}>Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            className={styles.campoInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br />

          <input
            type="password"
            placeholder="Senha"
            className={styles.campoInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className={styles.botaoLogin}>
            <img src={setaLogin} alt="Login" />
          </button>
        </form>

        <div className={styles.linksContainer}>
          <a href="#" onClick={handleNavigateToCreateAccount}>
            Criar Conta
          </a>
          <a href="#" onClick={handleNavigateToForgotPassword}>
            Esqueceu a Senha?
          </a>
        </div>
      </div>

      <div className={styles.imageSection}>
        <img src={tema} alt="Personagem mística com capuz" />
      </div>
    </main>
  );
}

export default LoginScreen;
