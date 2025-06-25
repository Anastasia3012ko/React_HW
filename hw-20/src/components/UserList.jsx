import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/UserList.module.css'

const UserList = () => {
    const userList = useSelector(state => state.users.users)
    console.log(userList)
  return (
    <div className={styles.wrapper}>
        <h3>UserList</h3>
        <ul className={styles.list}>
            {userList.map(user => (
                <li key={user.id}>
                    <p>{user.name},  email: {user.email}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserList