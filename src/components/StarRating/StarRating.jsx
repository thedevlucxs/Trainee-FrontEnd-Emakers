import React, { useState } from "react";
import styles from "./StarRating.module.css";

const StarRating = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

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
