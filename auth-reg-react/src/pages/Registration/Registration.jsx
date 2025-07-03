import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { register } from '../../redux/Slices/authSlice'
import { useNavigate } from 'react-router-dom'
import styles from '../Authorization/Authorization.module.css'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(register({email, password}))
    setEmail('')
    setPassword('')
    navigate('/login')
    
  }

  return (
    <div  className={styles.formWrapper}>
      <h3 className={styles.header}>Registration:</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Enter your Email..."
        />
        <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Enter your password..."
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default Registration
