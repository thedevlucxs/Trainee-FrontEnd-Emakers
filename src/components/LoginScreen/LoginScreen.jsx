import React, { useState } from "react";
import styles from "./LoginScreen.module.css";
import tema from "../../assets/icons/tema.svg";
import setaLogin from "../../assets/icons/setaLogin.svg";

// 1. Receba a propriedade { onLoginSuccess } que o App está enviando
function LoginScreen({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 2. Crie a função handleSubmit
  const handleSubmit = (event) => {
    // Impede o recarregamento da página
    event.preventDefault();
    // Chama a função que veio do App.jsx para trocar de tela
    onLoginSuccess();
  };

  return (
    <main className={styles.container}>
      <div className={styles.formSection}>
        <h1 className={styles.mainHeading}>Login</h1>

        {/* 3. Conecte a função ao "onSubmit" do formulário */}
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
          <a href="#">Criar Conta</a>
          <a href="#">Esqueceu a Senha?</a>
        </div>
      </div>

      <div className={styles.imageSection}>
        <img src={tema} alt="Personagem mística com capuz" />
      </div>
    </main>
  );
}

export default LoginScreen;
