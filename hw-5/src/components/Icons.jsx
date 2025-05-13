import React from 'react'
import Apple from '../assets/apple.svg'
import G from '../assets/G.svg'
import X from '../assets/X.svg'
import styles from '../styles/Icons.module.css'

const Icons = () => {
  return (
    <div className={styles.iconsWrapper}>
        <button className={styles.button}>
          <img src={Apple} alt="apple" />  
        </button>
        <button className={styles.button}>
          <img src={G} alt="google" />  
        </button>
        <button className={styles.button}>
          <img src={X} alt="X" />   
        </button>
    </div>
  )
}

export default Icons