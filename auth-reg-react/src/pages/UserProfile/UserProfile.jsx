import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from '../../redux/Slices/authSlice'
import styles from './UserProfile.module.css'

const UserProfile = () => {
    const dispatch = useDispatch()
  return (
    <div className={styles.user}> 
        <h1>User Profile</h1>
        <button className={styles.logout} onClick={()=>dispatch(logOut())}>Log out</button>
    </div>
  )
}

export default UserProfile