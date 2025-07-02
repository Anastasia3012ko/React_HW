import React from 'react'
import styles from './styles/UserList.module.css'

const UserList = ({users}) => {


  return (
    <ul className={styles.list}>
        {users.map(user => (
            <li key={user.id}>{user.name}</li>
        ))}
    </ul>
  )
}

export default UserList