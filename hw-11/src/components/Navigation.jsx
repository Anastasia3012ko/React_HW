import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navigation.module.css'

const Navigation = () => {
  return (
    <nav className={styles.navMenu}>
        <NavLink to='/' className={({isActive}) => isActive ? styles.activeLink : styles.link}>Home page</NavLink>
        <NavLink to='/articlesList' className={({isActive}) => isActive ? styles.activeLink : styles.link}>Articles list</NavLink>
    </nav>
  )
}

export default Navigation