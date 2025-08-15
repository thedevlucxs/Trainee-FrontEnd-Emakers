import React from "react";
import styles from "./HomeScreen.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import StarRating from "../StarRating/StarRating";

// Ícones
import carrinhoLogo from "../../assets/icons/carrinhoLogo.svg";
import lapisIcon from "../../assets/icons/Lápis.svg";
import lixeiraIcon from "../../assets/icons/Lixeira.svg";

// Imagens dos jogos
import spongebobImage from "../../assets/vertical/spongebob.png";
import deliverUsMarsImage from "../../assets/vertical/deliver-us-mars.png";
import godOfWarImage from "../../assets/vertical/god-of-war.png";
import deathStrandingImage from "../../assets/vertical/death-stranding.png";

const games = [
  { id: 1, title: "SpongeBob", rating: 5, imageUrl: spongebobImage },
  { id: 2, title: "Deliver Us Mars", rating: 4, imageUrl: deliverUsMarsImage },
  { id: 3, title: "God of War", rating: 3, imageUrl: godOfWarImage },
  { id: 4, title: "Death Stranding", rating: 0, imageUrl: deathStrandingImage },
];

function HomeScreen({ onNavigate }) {
  const handleDeleteAccount = () => {
    onNavigate("login");
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar onNavigate={onNavigate} />
      <main className={styles.mainContent}>
        <section className={styles.userInfo}>
          <h2>Olá, {"<<Nome do Usuário>>"}</h2>
          <p>Seu email é nomeusuario@email.com</p>
          <p>Seu CPF é 123.456.789-00</p>

          <div className={styles.actionButtons}>
            <button className={styles.actionButton}>
              Alterar Dados
              <img src={lapisIcon} alt="Alterar Dados" />
            </button>
            <button
              className={`${styles.actionButton} ${styles.destructiveButton}`}
              onClick={handleDeleteAccount}
            >
              Excluir Conta
              <img src={lixeiraIcon} alt="Excluir Conta" />
            </button>
            <button
              className={`${styles.actionButton} ${styles.disabledButton}`}
              disabled
            >
              Tela do admin
            </button>
          </div>
        </section>

        <aside className={styles.gamesInfo}>
          <h3>Jogos adquiridos:</h3>
          <div className={styles.gamesGrid}>
            {games.map((game) => (
              <div key={game.id} className={styles.gameCard}>
                <img src={game.imageUrl} alt={game.title} />
                <StarRating initialRating={game.rating} />
              </div>
            ))}
          </div>
          <a href="#" className={styles.cartLink}>
            <img src={carrinhoLogo} alt="Carrinho de compras" />
          </a>
        </aside>
      </main>
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

export default HomeScreen;
