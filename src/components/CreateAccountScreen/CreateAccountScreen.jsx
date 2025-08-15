import React, { useState } from "react";
import styles from "./CreateAccountScreen.module.css";
import tema from "../../assets/icons/tema.svg";
import setaLogin from "../../assets/icons/setaLogin.svg";

// Recebe a propriedade onNavigate para poder voltar à tela de login
function CreateAccountScreen({ onNavigate }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // A seta volta para a tela de login, como o botão de excluir conta fazia
  const handleNavigateToLogin = (event) => {
    event.preventDefault();
    onNavigate("login");
  };

  return (
    <main className={styles.container}>
      <div className={styles.formSection}>
        <h1 className={styles.mainHeading}>Registrar</h1>

        <form onSubmit={handleNavigateToLogin}>
          <input
            type="text"
            placeholder="Nome de Usuário"
            className={styles.campoInput}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            className={styles.campoInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="CPF"
            className={styles.campoInput}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className={styles.campoInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar Senha"
            className={styles.campoInput}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className={styles.botaoLogin}>
            <img src={setaLogin} alt="Registrar" />
          </button>
        </form>

        <div className={styles.linksContainer}>
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

export default CreateAccountScreen;
