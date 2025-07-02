import React from 'react'
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuote } from "../redux/quoteSlice" 

const Quote = () => {
 const data = useSelector(state => state.quote.quote)
 const loading  = useSelector(state => state.quote.loading)
 const error = useSelector(state => state.quote.error)
 const dispatch = useDispatch()


 useEffect(()=>{
  dispatch(fetchQuote())
 }, [dispatch])

 useEffect(()=>{
    console.log(data)
 }, [data])

 if(loading) {
    return <p>Loading...</p>
 }
 if(error) {
    <h3>{error}</h3>
 }

  return (
    <div>
        <p>{data.q}</p>
        <p>{data.a}</p>
        <button onClick={()=>dispatch(fetchQuote())}>New Quote</button>
    </div>
  )
}

export default Quote