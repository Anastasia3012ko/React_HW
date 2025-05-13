import React from 'react'
import styles from '../styles/Header.module.css'
import Icons from './Icons'

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>LIFE IS WASTED ON THE LIVING</h1>
        <h3>Sign in <br/> with</h3>
        <Icons/>
    </div>
  )
}

export default Header