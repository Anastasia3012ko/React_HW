import React from 'react'
import { connect } from 'react-redux'
 import styles from '../styles/User.module.css'

const User = ({name, status}) => {
  return (
    <div className={styles.user}>
        <h3>About user:</h3>
        <p>Name: {name}</p>
        <p>Status: {status}</p>
    </div>
  )
}
const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status
})
export default  connect(mapStateToProps)(User)