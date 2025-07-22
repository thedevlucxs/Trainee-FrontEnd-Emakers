import React, { useState } from "react";

import styles from "./LoginScreen.module.css";

import tema from "../../assets/tema.svg";
import setaLogin from "../../assets/setaLogin.svg";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className={styles.container}>
      <div className={styles.formSection}>
        <h1 className={styles.mainHeading}>Login</h1>

        <form>
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
