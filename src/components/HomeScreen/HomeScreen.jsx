import React from "react";
import styles from "./HomeScreen.module.css";

// Importando os ícones da pasta assets
import logoIcon from "../../assets/icon.svg";
import carrinhoLogo from "../../assets/carrinhoLogo.svg";
import lapisIcon from "../../assets/Lápis.svg";
import lixeiraIcon from "../../assets/Lixeira.svg";
import lupaIcon from "../../assets/Lupa.svg";

// Imagens dos jogos
import spongebobImage from "../../assets/spongebob.png";
import deliverUsMarsImage from "../../assets/deliver-us-mars.png";
import godOfWarImage from "../../assets/god-of-war.png";
import deathStrandingImage from "../../assets/death-stranding.png";

const games = [
  { id: 1, title: "SpongeBob", progress: "100/100", imageUrl: spongebobImage },
  {
    id: 2,
    title: "Deliver Us Mars",
    progress: "95/100",
    imageUrl: deliverUsMarsImage,
  },
  { id: 3, title: "God of War", progress: "75/100", imageUrl: godOfWarImage },
  {
    id: 4,
    title: "Death Stranding",
    progress: null,
    imageUrl: deathStrandingImage,
  },
];

function HomeScreen() {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <img src={logoIcon} alt="Logo" className={styles.logo} />
          <a href="#">Lançamentos</a>
          <span className={styles.separator}></span>
          <a href="#">Populares</a>
          <span className={styles.separator}></span>
          <a href="#">Gêneros</a>
          <span className={styles.separator}></span>
          <a href="#">Promoções</a>
          <span className={styles.separator}></span>
          <a href="#">Conta</a>
        </nav>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="" className={styles.searchInput} />
          <img src={lupaIcon} alt="Pesquisar" />
        </div>
      </header>
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
                {game.progress ? (
                  <p>{game.progress}</p>
                ) : (
                  <a href="#">Adicionar Avaliação</a>
                )}
              </div>
            ))}
          </div>
          <a href="#" className={styles.cartLink}>
            <img src={carrinhoLogo} alt="Carrinho de compras" />
          </a>
        </aside>
      </main>
    </div>
  );
}

export default HomeScreen;
