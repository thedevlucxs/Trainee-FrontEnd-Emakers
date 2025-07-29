import React from "react";
import styles from "./Navbar.module.css";
import logoIcon from "../../assets/icons/icon.svg";
import lupaIcon from "../../assets/icons/Lupa.svg";

// A Navbar agora recebe a prop 'onNavigate' do App.jsx
function Navbar({ onNavigate }) {
  // Função para lidar com o clique e chamar o onNavigate
  const handleAccountClick = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do link
    onNavigate("profile"); // Diz ao App para mudar a página para 'profile'
  };

  return (
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
        {/* Adiciona o onClick para chamar a função de navegação */}
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
