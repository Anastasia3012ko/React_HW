import React from 'react'
import styles from '../styles/CityCard.module.css'

const CityCard = ({city, imgCity, description, facts}) => {
  return (
    <div className={styles.cityCard}>
        <h3>{city}</h3>
        <img style={{width: '30vw'}} src={imgCity} alt="City photo" />
        <p>{description}</p>
        <ul>
            {facts.map(item => <li>{item}</li>)}
        </ul>


    </div>
  )
}

export default CityCard