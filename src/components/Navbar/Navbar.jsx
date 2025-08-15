import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logoIcon from "../../assets/icons/icon.svg";
import lupaIcon from "../../assets/icons/Lupa.svg";

function Navbar({ onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAccountClick = (event) => {
    event.preventDefault();
    onNavigate("profile");
    setIsMenuOpen(false); // Fecha o menu ao navegar
  };

  const handleReleasesClick = (event) => {
    event.preventDefault();
    onNavigate("store");
    setIsMenuOpen(false); // Fecha o menu ao navegar
  };

  const handlePopularClick = (event) => {
    event.preventDefault();
    onNavigate("popular");
    setIsMenuOpen(false); // Fecha o menu ao navegar
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <img src={logoIcon} alt="Logo" className={styles.logo} />

      <button className={styles.hamburger} onClick={toggleMenu}>
        &#9776;
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <a href="#" onClick={handleReleasesClick}>
          Lançamentos
        </a>
        <span className={styles.separator}></span>
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
        {/* O contêiner de pesquisa foi movido para dentro da navegação */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Pesquisar..."
            className={styles.searchInput}
          />
          <img src={lupaIcon} alt="Pesquisar" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
