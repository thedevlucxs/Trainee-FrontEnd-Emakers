import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./StoreScreen.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// --- ÍCONES ---
import carrinhoIcon from "/src/assets/icons/carrinhoLogo.svg";

// --- IMAGENS DO HERO (HORIZONTAL) ---
import daysGoneImage from "/src/assets/horizontal/daysgone.png";
import godOfWarHorizontalImage from "/src/assets/horizontal/godofwar.png";
import horizonImage from "/src/assets/horizontal/horizonzerodawn.png";
// Adicionei as outras imagens verticais como placeholders para a randomização funcionar melhor
import spongebobImage from "/src/assets/vertical/spongebob.png";
import deathStrandingImage from "/src/assets/vertical/death-stranding.png";
import spellforceImage from "/src/assets/vertical/spellforce.png";

// --- IMAGENS DE LANÇAMENTOS (VERTICAL) ---
import deliverUsMarsImage from "/src/assets/vertical/deliver-us-mars.png";
import perishImage from "/src/assets/vertical/perish.png";

// Array com todas as imagens disponíveis para o carrossel principal
const allHorizontalGames = [
  {
    id: 1,
    title: "God of War",
    image: godOfWarHorizontalImage,
    discount: "-40%",
    price: "R$ 119,95",
  },
  {
    id: 2,
    title: "Days Gone",
    image: daysGoneImage,
    discount: "-15%",
    price: "R$ 169,90",
  },
  {
    id: 3,
    title: "Horizon Zero Dawn",
    image: horizonImage,
    discount: "-25%",
    price: "R$ 142,99",
  },
  {
    id: 4,
    title: "SpongeBob",
    image: spongebobImage,
    discount: "-10%",
    price: "R$ 299,00",
  },
  {
    id: 5,
    title: "Death Stranding",
    image: deathStrandingImage,
    discount: "-30%",
    price: "R$ 249,00",
  },
  {
    id: 6,
    title: "SpellForce 3",
    image: spellforceImage,
    discount: "-20%",
    price: "R$ 199,00",
  },
];

const newReleases = [
  { id: 1, title: "SpongeBob", price: "R$ 299,00", image: spongebobImage },
  {
    id: 2,
    title: "Deliver Us Mars",
    price: "R$ 299,00",
    image: deliverUsMarsImage,
  },
  { id: 3, title: "SpellForce 3", price: "R$ 299,00", image: spellforceImage },
  {
    id: 4,
    title: "Death Stranding",
    price: "R$ 299,00",
    image: deathStrandingImage,
  },
  { id: 5, title: "Perish", price: "R$ 299,00", image: perishImage },
];

function StoreScreen({ onNavigate }) {
  const [heroSlides, setHeroSlides] = useState([]);

  // Este efeito é executado uma vez para embaralhar as imagens e criar os slides
  useEffect(() => {
    const shuffle = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };

    const shuffledGames = shuffle([...allHorizontalGames]);
    const slidesData = [];
    // Cria um slide para cada 3 jogos
    for (let i = 0; i <= shuffledGames.length - 3; i += 3) {
      slidesData.push({
        main: shuffledGames[i],
        sideTop: shuffledGames[i + 1],
        sideBottom: shuffledGames[i + 2],
      });
    }
    setHeroSlides(slidesData);
  }, []);

  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Setas de navegação ativadas
  };

  const releasesSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.storeContainer}>
      <Navbar onNavigate={onNavigate} />
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <Slider {...heroSettings}>
            {/* Mapeia os slides criados para renderizar o carrossel */}
            {heroSlides.map((slide, index) => (
              <div key={index} className={styles.heroGrid}>
                <div className={styles.heroGridLeft}>
                  <div className={styles.heroCardSmall}>
                    <img src={slide.sideTop.image} alt={slide.sideTop.title} />
                    <div className={styles.priceBox}>
                      <span className={styles.discount}>
                        {slide.sideTop.discount}
                      </span>
                      <span className={styles.price}>
                        {slide.sideTop.price}
                      </span>
                    </div>
                  </div>
                  <div className={styles.heroCardSmall}>
                    <img
                      src={slide.sideBottom.image}
                      alt={slide.sideBottom.title}
                    />
                    <div className={styles.priceBox}>
                      <span className={styles.discount}>
                        {slide.sideBottom.discount}
                      </span>
                      <span className={styles.price}>
                        {slide.sideBottom.price}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={styles.heroGridRight}>
                  <div className={styles.heroCardLarge}>
                    <img src={slide.main.image} alt={slide.main.title} />
                    <div className={styles.priceBox}>
                      <span className={styles.discount}>
                        {slide.main.discount}
                      </span>
                      <span className={styles.price}>{slide.main.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        <div className={styles.releasesContainer}>
          <section className={styles.releasesSection}>
            <h2 className={styles.sectionTitle}>Lançamentos</h2>
            <Slider {...releasesSettings}>
              {newReleases.map((game) => (
                <div key={game.id} className={styles.releaseCard}>
                  <img
                    src={game.image}
                    alt={game.title}
                    className={styles.releaseImage}
                  />
                  <div className={styles.releasePriceBox}>
                    <p>{game.price}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </section>
          <a href="#" className={styles.cartButton}>
            <img src={carrinhoIcon} alt="Carrinho de compras" />
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default StoreScreen;
