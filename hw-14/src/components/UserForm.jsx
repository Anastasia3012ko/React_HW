import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUserInfo } from '../redux/actions'
import styles from '../styles/UserForm.module.css'


const UserForm = ({ setUserInfo }) => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    setUserInfo(name, status)
    setName('')
    setStatus('')
  }

  return (
    <form className={styles.form}>
      <h3>Edit user information:</h3>
      <div >
        <label className={styles.input}>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </div>
      <div >
        <label className={styles.input}>
          Status:
          <input
            type="text"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </label>
      </div>
      <button onClick={handleSubmit}>Save</button>
    </form>
  )
}

export default connect(null, {setUserInfo})(UserForm)
