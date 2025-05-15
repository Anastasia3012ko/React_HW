import React, { useState } from 'react'
import styles from '../styles/List.module.css'
import People from './People'

const List = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'Иван', age: 20 },

    { id: 2, name: 'Мария', age: 22 },

    { id: 3, name: 'Алексей', age: 21 },

    { id: 4, name: 'Марина', age: 19 },

    { id: 5, name: 'Даша', age: 23 },

    { id: 6, name: 'Глеб', age: 24 },

    { id: 7, name: 'Дима', age: 18 },

    { id: 8, name: 'Гриша', age: 20 },

    { id: 9, name: 'Серафим', age: 21 },
  ])

  const itemDelete = (id) => {
    setPeople(people.filter((item) => item.id !== id))
  }

  return (
    <div>
      <ul className={styles.list}>
        {people.map((item) => (
          <People
            key={item.id}
            name={item.name}
            age={item.age}
            onDelete={itemDelete}
            itemId={item.id}
          />
        ))}
      </ul>
    </div>
  )
}

export default List
