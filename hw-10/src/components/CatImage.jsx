import React, { useEffect, useState } from 'react'
import styles from '../styles/CatImage.module.css'
import axios from 'axios'

const CatImage = () => {
    const [image, setImage]=useState('')
    const fetchImage = async()=> {
        try{
           await axios.get('https://api.thecatapi.com/v1/images/search') 
           .then (response => {
            setImage(response.data[0])
            console.log(response.data[0])
           })
       
        }catch (error) {
            console.error('Error loading data', error)
        }
    }
useEffect(()=>{
    fetchImage()
}, [])

  return (
    <div className={styles.wrapper}>
        <h1 className={styles.header}>Random Cat Image</h1>
        <img className={styles.image} src={image.url} alt="random cat" />
        <button className={styles.button} onClick={fetchImage}>Load new image</button>

    </div>
  )
}

export default CatImage