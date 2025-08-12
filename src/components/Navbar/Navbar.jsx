import React from "react";
import styles from "./Navbar.module.css";
import logoIcon from "../../assets/icons/icon.svg";
import lupaIcon from "../../assets/icons/Lupa.svg";

function Navbar({ onNavigate }) {
  const handleAccountClick = (event) => {
    event.preventDefault();
    onNavigate("profile");
  };

  const handleReleasesClick = (event) => {
    event.preventDefault();
    onNavigate("store");
  };

  // Função para navegar para a tela PopularScreen
  const handlePopularClick = (event) => {
    event.preventDefault();
    onNavigate("popular");
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logoIcon} alt="Logo" className={styles.logo} />
        <a href="#" onClick={handleReleasesClick}>
          Lançamentos
        </a>
        <span className={styles.separator}></span>
        {/* Adicionado o onClick ao link de Populares */}
        <a href="#" onClick={handlePopularClick}>
          Populares
        </a>
        <span className={styles.separator}></span>
        <a href="#">Gêneros</a>
        <span className={styles.separator}></span>
        <a href="#">Promoções</a>
        <span className={styles.separator}></span>
        <a href="#" onClick={handleAccountClick}>
          Conta
        </a>
      </nav>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="" className={styles.searchInput} />
        <img src={lupaIcon} alt="Pesquisar" />
      </div>
    </header>
  );
}

export default Navbar;
