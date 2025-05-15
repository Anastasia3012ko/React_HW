import React, { useState } from 'react'
import styles from '../styles/Rating.module.css'

const Rating = () => {
  const [ratingValue, setRatingValue] = useState(1)
  const ratingList = [
    'https://www.clipartmax.com/middle/m2i8K9G6N4Z5H7Z5_sunset-star-ratings-5-5/',

    'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',

    'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',

    'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png',
  ]

  return (
    <div className={styles.rating}>
      <img
        className={styles.img}
        src={ratingList[ratingValue]}
        alt="Your rating"
      />
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => setRatingValue(3)}>
          Плохо
        </button>
        <button className={styles.button} onClick={() => setRatingValue(2)}>
          Приемлемо
        </button>
        <button className={styles.button} onClick={() => setRatingValue(1)}>
          Хорошо
        </button>
        <button className={styles.button} onClick={() => setRatingValue(0)}>
          Отлично
        </button>
      </div>
    </div>
  )
}

export default Rating
