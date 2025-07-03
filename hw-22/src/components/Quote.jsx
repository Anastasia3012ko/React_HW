import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../redux/quoteSlice'
import styles from './Quote.module.css'

const Quote = () => {
  const data = useSelector((state) => state.quote.quote)
  const loading = useSelector((state) => state.quote.loading)
  const error = useSelector((state) => state.quote.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchQuote())
  }, [dispatch])

  useEffect(() => {
    console.log(data)
  }, [data])

  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    ;<h3>{error}</h3>
  }

  return (
    <div className={styles.quote}>
      <div className={styles.text}>
        <p> Quote text... {data.q}</p>
        <p className={styles.author}> Author...{data.a}</p>
      </div>
      <button onClick={() => dispatch(fetchQuote())}>New Quote</button>
    </div>
  )
}

export default Quote
