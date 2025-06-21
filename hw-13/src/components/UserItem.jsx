import React from 'react'
import styles from '../styles/UserItem.module.css'

const UserItem = ({user}) => {
  return (
    <div className={styles.wrapper}>
        <li className={styles.item}>{user.name}</li>
    </div>
  )
}

export default UserItem