import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import styles from "./PopularScreen.module.css"; // Atualizado

// Ícones e Imagens
import carrinhoIcon from "/src/assets/icons/carrinhoLogo.svg";
import godOfWarImage from "/src/assets/horizontal/godofwar.png";
import horizonImage from "/src/assets/horizontal/horizonzerodawn.png";
import daysGoneImage from "/src/assets/horizontal/daysgone.jpg";

const popularGames = [
  {
    id: 1,
    rank: "1º",
    title: "God of War",
    image: godOfWarImage,
    description:
      "Kratos é pai novamente. Como mentor e protetor de Atreus, um filho determinado a ganhar seu respeito, ele é forçado a encarar e controlar a fúria que por muito tempo o definiu enquanto viaja por um mundo ameaçador com o seu filho. Com a vingança contra os deuses do Olimpo no passado, Kratos agora vive no reino das divindades e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver, enquanto ensina seu filho a fazer o mesmo e tenta impedi-lo de repetir os erros cruéis do Fantasma de Esparta.",
  },
  {
    id: 2,
    rank: "2º",
    title: "Horizon Zero Dawn",
    image: horizonImage,
    description:
      "Em um futuro distante, dominado por máquinas colossais que vagam pela Terra, a natureza retomou as ruínas da nossa civilização esquecida e pequenos grupos de sobreviventes se dividem em diferentes tribos. Empunhe o arco e a lança de Aloy, uma jovem caçadora de máquinas exilada da sua tribo, que parte em busca da verdade sobre suas origens e o misterioso mundo que ela precisa salvar.",
  },
  {
    id: 3,
    rank: "3º",
    title: "Days Gone",
    image: daysGoneImage,
    description:
      "Days Gone é um jogo de ação e aventura em mundo aberto que se passa em um ambiente adverso dois anos após uma pandemia mundial devastadora. Jogue na pele do antigo motoqueiro fora da lei Deacon St. John, um caçador de recompensas que tenta achar uma razão para viver numa terra cercada pela morte. Vasculhe assentamentos abandonados em busca de equipamentos para produzir itens e armas valiosos ou arrisque-se com outros sobreviventes que tentam ganhar a vida honestamente… ou de formas mais violentas.",
  },
];

// Renomeado para PopularScreen
function PopularScreen({ onNavigate }) {
  return (
    <div className={styles.pageContainer}>
      <Navbar onNavigate={onNavigate} />
      <main className={styles.mainContent}>
        <h2 className={styles.title}>Populares</h2>
        <div className={styles.gamesList}>
          {popularGames.map((game, index) => (
            <div
              key={game.id}
              className={`${styles.gameCard} ${
                index % 2 !== 0 ? styles.reverse : ""
              }`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={game.image}
                  alt={game.title}
                  className={styles.gameImage}
                />
                <div className={styles.rankBadge}>{game.rank}</div>
              </div>
              <div className={styles.textContainer}>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="#" className={styles.cartButton}>
          <img src={carrinhoIcon} alt="Carrinho de compras" />
        </a>
      </main>
      <Footer />
    </div>
  );
}

export default PopularScreen; // Atualizado
