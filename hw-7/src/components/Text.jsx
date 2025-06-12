import React, { useContext } from 'react'
import styles from '../styles/Text.module.css'
import { LanguageContext } from '../context/LanguagesContext'

const Text = () => {
    const {language} =  useContext(LanguageContext)
  return (
    <div className={styles.text}>
        <span className={language === 'en' ? styles.visible : styles.invisible} >
            Menton is a beautiful town located on the French Riviera, near the Italian border.
            It is famous for its mild climate and stunning Mediterranean views.
            Menton is known for its annual Lemon Festival, attracting many tourists.
            The town has charming old streets and colorful houses.
            Menton is also home to several beautiful gardens and historic buildings.
        </span>
        <span className={language === 'de' ? styles.visible : styles.invisible}>
            Menton ist eine schöne Stadt an der Französischen Riviera, nahe der italienischen Grenze.
            Sie ist berühmt für ihr mildes Klima und die atemberaubenden Mittelmeerblicke.
            Menton ist bekannt für sein jährliches Zitronenfest, das viele Touristen anzieht.
            Die Stadt hat charmante alte Gassen und bunte Häuser.
            Menton beherbergt auch mehrere schöne Gärten und historische Gebäude.
        </span>
    </div>
  )
}

export default Text