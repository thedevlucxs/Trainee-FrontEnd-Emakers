import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styles from "./StoreScreen.module.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

// --- ÍCONES ---
import carrinhoIcon from "/src/assets/icons/carrinhoLogo.svg";
import precoIcon from "/src/assets/icons/preco.svg";
import descontoIcon from "/src/assets/icons/desconto.svg";

// --- IMAGENS HORIZONTAIS PARA O CARROSSEL HERO ---
import daysGoneImage from "/src/assets/horizontal/daysgone.jpg";
import godOfWarHorizontalImage from "/src/assets/horizontal/godofwar.png";
import horizonImage from "/src/assets/horizontal/horizonzerodawn.png";
import liesofpImage from "/src/assets/horizontal/liesofp.jpg";
import theCrewImage from "/src/assets/horizontal/thecrew.jpg";
import bloodborneImage from "/src/assets/horizontal/bloodborne.jpg";
import cs2Image from "/src/assets/horizontal/cs2.jpg";
import forzaImage from "/src/assets/horizontal/forzahorizon5.jpg";
import groundedImage from "/src/assets/horizontal/grounded.jpg";
import eldenRingImage from "/src/assets/horizontal/eldenring.jpg";
import fc26Image from "/src/assets/horizontal/fc26.jpg";
import assettoCorsaImage from "/src/assets/horizontal/asettocorsa.jpg";

// --- IMAGENS VERTICAIS PARA O CARROSSEL DE LANÇAMENTOS ---
import spongebobImage from "/src/assets/vertical/spongebob.png";
import deathStrandingImage from "/src/assets/vertical/death-stranding.png";
import spellforceImage from "/src/assets/vertical/spellforce.png";
import deliverUsMarsImage from "/src/assets/vertical/deliver-us-mars.png";
import perishVerticalImage from "/src/assets/vertical/perish.png";
import godOfWarVerticalImage from "/src/assets/vertical/god-of-war.png";

const allHeroGames = [
  {
    id: 1,
    title: "Lies of P",
    image: liesofpImage,
    discount: "-10%",
    price: "R$ 299,00",
  },
  {
    id: 2,
    title: "The Crew Motorfest",
    image: theCrewImage,
    discount: "-25%",
    price: "R$ 224,90",
  },
  {
    id: 3,
    title: "Bloodborne",
    image: bloodborneImage,
    discount: "-50%",
    price: "R$ 49,99",
  },
  {
    id: 4,
    title: "Counter Strike 2",
    image: cs2Image,
    discount: "Grátis",
    price: "R$ 0,00",
  },
  {
    id: 5,
    title: "Forza Horizon 5",
    image: forzaImage,
    discount: "-35%",
    price: "R$ 161,85",
  },
  {
    id: 6,
    title: "Grounded",
    image: groundedImage,
    discount: "-40%",
    price: "R$ 119,40",
  },
  {
    id: 7,
    title: "Elden Ring",
    image: eldenRingImage,
    discount: "-15%",
    price: "R$ 212,40",
  },
  {
    id: 8,
    title: "EA FC 26",
    image: fc26Image,
    discount: "-10%",
    price: "R$ 323,10",
  },
  {
    id: 9,
    title: "Assetto Corsa",
    image: assettoCorsaImage,
    discount: "-80%",
    price: "R$ 15,99",
  },
  {
    id: 10,
    title: "God of War",
    image: godOfWarHorizontalImage,
    discount: "-40%",
    price: "R$ 119,95",
  },
  {
    id: 11,
    title: "Days Gone",
    image: daysGoneImage,
    discount: "-15%",
    price: "R$ 169,90",
  },
  {
    id: 12,
    title: "Horizon Zero Dawn",
    image: horizonImage,
    discount: "-25%",
    price: "R$ 142,99",
  },
];

const newReleases = [
  {
    id: 1,
    title: "SpongeBob",
    price: "R$ 299,00",
    image: spongebobImage,
    discount: "-10%",
  },
  {
    id: 2,
    title: "Deliver Us Mars",
    price: "R$ 299,00",
    image: deliverUsMarsImage,
    discount: "-15%",
  },
  {
    id: 3,
    title: "SpellForce 3",
    price: "R$ 299,00",
    image: spellforceImage,
    discount: "-20%",
  },
  {
    id: 4,
    title: "Death Stranding",
    price: "R$ 299,00",
    image: deathStrandingImage,
    discount: "-5%",
  },
  {
    id: 5,
    title: "Perish",
    price: "R$ 299,00",
    image: perishVerticalImage,
    discount: "-25%",
  },
  {
    id: 6,
    title: "God of War",
    price: "R$ 119,95",
    image: godOfWarVerticalImage,
    discount: "-40%",
  },
];

function StoreScreen({ onNavigate }) {
  const [heroSlides, setHeroSlides] = useState([]);

  useEffect(() => {
    const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);
    const slidesData = [];
    const numSlides = Math.floor(allHeroGames.length / 3);
    let availableGames = shuffle(allHeroGames);
    for (let i = 0; i < numSlides; i++) {
      const slideGames = availableGames.splice(0, 3);
      slidesData.push({
        main: slideGames[0],
        sideTop: slideGames[1],
        sideBottom: slideGames[2],
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
    arrows: true,
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
            {heroSlides.map((slide, index) => (
              <div key={index} className={styles.heroGrid}>
                <div className={styles.heroGridLeft}>
                  <div className={styles.heroCardSmall}>
                    <img src={slide.sideTop.image} alt={slide.sideTop.title} />
                    <div className={styles.priceBox}>
                      <div className={styles.iconWithValue}>
                        <img
                          src={descontoIcon}
                          alt="Desconto"
                          className={styles.priceIcon}
                        />
                        <span className={styles.discountValue}>
                          {slide.sideTop.discount}
                        </span>
                      </div>
                      <div className={styles.iconWithValue}>
                        <img
                          src={precoIcon}
                          alt="Preço"
                          className={styles.priceIcon}
                        />
                        <span className={styles.priceValue}>
                          {slide.sideTop.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.heroCardSmall}>
                    <img
                      src={slide.sideBottom.image}
                      alt={slide.sideBottom.title}
                    />
                    <div className={styles.priceBox}>
                      <div className={styles.iconWithValue}>
                        <img
                          src={descontoIcon}
                          alt="Desconto"
                          className={styles.priceIcon}
                        />
                        <span className={styles.discountValue}>
                          {slide.sideBottom.discount}
                        </span>
                      </div>
                      <div className={styles.iconWithValue}>
                        <img
                          src={precoIcon}
                          alt="Preço"
                          className={styles.priceIcon}
                        />
                        <span className={styles.priceValue}>
                          {slide.sideBottom.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.heroGridRight}>
                  <div className={styles.heroCardLarge}>
                    <img src={slide.main.image} alt={slide.main.title} />
                    <div className={styles.priceBox}>
                      <div className={styles.iconWithValue}>
                        <img
                          src={descontoIcon}
                          alt="Desconto"
                          className={styles.priceIcon}
                        />
                        <span className={styles.discountValue}>
                          {slide.main.discount}
                        </span>
                      </div>
                      <div className={styles.iconWithValue}>
                        <img
                          src={precoIcon}
                          alt="Preço"
                          className={styles.priceIcon}
                        />
                        <span className={styles.priceValue}>
                          {slide.main.price}
                        </span>
                      </div>
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
                  <div className={styles.releaseImageContainer}>
                    <img
                      src={game.image}
                      alt={game.title}
                      className={styles.releaseImage}
                    />
                    <div className={styles.priceBox}>
                      <div className={styles.iconWithValue}>
                        <img
                          src={descontoIcon}
                          alt="Desconto"
                          className={styles.priceIcon}
                        />
                        <span className={styles.discountValue}>
                          {game.discount}
                        </span>
                      </div>
                      <div className={styles.iconWithValue}>
                        <img
                          src={precoIcon}
                          alt="Preço"
                          className={styles.priceIcon}
                        />
                        <span className={styles.priceValue}>{game.price}</span>
                      </div>
                    </div>
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
