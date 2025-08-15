import React, { useState } from "react";
import styles from "./ForgotPasswordScreen.module.css";
import tema from "../../assets/icons/tema.svg";
import setaLogin from "../../assets/icons/setaLogin.svg";

function ForgotPasswordScreen({ onNavigate }) {
  const [email, setEmail] = useState("");

  const handleNavigateToLogin = (event) => {
    event.preventDefault();
    onNavigate("login");
  };

  const handleNavigateToCreateAccount = (event) => {
    event.preventDefault();
    onNavigate("createAccount");
  };

  return (
    <main className={styles.container}>
      <div className={styles.formSection}>
        <h1 className={styles.mainHeading}>Recuperar Conta</h1>

        <form onSubmit={handleNavigateToLogin}>
          <input
            type="email"
            placeholder="E-mail"
            className={styles.campoInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className={styles.botaoLogin}>
            <img src={setaLogin} alt="Recuperar" />
          </button>
        </form>

        <div className={styles.linksContainer}>
          <a href="#" onClick={handleNavigateToCreateAccount}>
            Criar Conta
          </a>
          <a href="#" onClick={handleNavigateToLogin}>
            Fazer Login
          </a>
        </div>
      </div>

      <div className={styles.imageSection}>
        <img src={tema} alt="Personagem mística com capuz" />
      </div>
    </main>
  );
}

export default ForgotPasswordScreen;
