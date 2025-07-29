import React from "react";
import styles from "./Footer.module.css";
import logoIcon from "../../assets/icons/icon.svg"; // Reutilizando o ícone da logo

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.gameDameInfo}>
          <img src={logoIcon} alt="Game Dame Logo" className={styles.logo} />
          <div className={styles.infoText}>
            <h3>Game Dame</h3>
            <p>Seu próximo o jogo começa aqui</p>
          </div>
        </div>

        <div className={styles.explore}>
          <h4>Explorar</h4>
          <a href="#">Início</a>
          <a href="#">Populares</a>
          <a href="#">Conta</a>
        </div>

        <div className={styles.contact}>
          <h4>Contato</h4>
          <p>gamegamedame@teste.com</p>
          <p>(99) 9 9999-9999</p>
          <p>Shopping X, Lavras - MG</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>2024 Game Dame | By Emakers Júnior</p>
      </div>
    </footer>
  );
}

export default Footer;
