import React, { useState } from "react";
import styles from "./StarRating.module.css";

const StarRating = ({ initialRating = 0 }) => {
  // Define o valor inicial da classificação como 0 por padrão
  const [rating, setRating] = useState(initialRating); // Armazena a classificação atual
  const [hover, setHover] = useState(0); // Ao passar o mouse, exibe a classificação temporária

  return (
    <div className={styles.starRating}>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <button
            type="button"
            key={index}
            className={
              ratingValue <= (hover || rating)
                ? `${styles.star} ${styles.on}`
                : `${styles.star} ${styles.off}`
            }
            onClick={() => setRating(ratingValue)}
            onMouseEnter={() => setHover(ratingValue)}
            onMouseLeave={() => setHover(0)}
          >
            &#9733;
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
