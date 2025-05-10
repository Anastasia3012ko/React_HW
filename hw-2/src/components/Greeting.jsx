import React from 'react'
import styles from '../styles/Greeting.module.css'

const Greeting = ({name}) => {
  return (
    <div className={styles.greeting}>
        <h1 className={styles.header}>Hi {name}!!!</h1>
    </div>
  )
}

export default Greeting