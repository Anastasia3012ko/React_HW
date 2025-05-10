import React from 'react'
import styles from '../styles/ShoppingList.module.css'

const ShoppingList = ({array}) => {
  return (
    <div >
        {array.length === 0 ? (
            <p style={{color: 'red', fontStyle: 'italic'}}>Shopping list is empty</p>
        ) : (
            <ul className={styles.listWrapper}>
                {array.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default ShoppingList