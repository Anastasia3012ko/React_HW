import React from 'react'
import styles from '../styles/People.module.css'

const People = ({name, age, onDelete, itemId}) => {
  return (
    <li className={styles.people}>
        <h4 className={styles.header}>{name}</h4>
        <p className={styles.age}>{age}</p>
        <button className={styles.delete} onClick={() => onDelete(itemId)}>Delete</button>
    </li>
  )
}

export default People