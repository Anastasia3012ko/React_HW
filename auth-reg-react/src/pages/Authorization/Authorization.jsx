import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/Slices/authSlice'
import styles from './Authorization.module.css'

const Authorization = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const {isAuth, error} = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ email, password }))
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if (isAuth) {
      navigate('/user')
    }
  }, [isAuth])

  return (
    <div className={styles.formWrapper}>
      <h3 className={styles.header}>Authorization</h3>
      {error && <span>{error}</span>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Enter your Email..."
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          placeholder="Enter your password..."
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Authorization
