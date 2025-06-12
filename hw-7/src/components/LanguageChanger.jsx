import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguagesContext'
import styles from '../styles/LanguageChanger.module.css'

const LanguageChanger = () => {
    const {language, changeLanguage} =  useContext(LanguageContext)

  return (
    <div className={styles.changer}>
        <h4 className={styles.language}>Current language: <span className={styles.curLang}>{language}</span></h4>
        <button className={styles.button} onClick={changeLanguage}>Switch language</button>
    </div>
  )
}

export default LanguageChanger