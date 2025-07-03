import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Registration</Link>
      <Link to="/user">User profile</Link>
    </nav>
  )
}

export default Navigation
