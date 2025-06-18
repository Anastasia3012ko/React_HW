import React, { useEffect, useState } from 'react'

const ListItems = () => {
  const [items, setItems] = useState([])
  const [inputValue, setInputValue] = useState('')
  const addElement = () => {
    if (inputValue !== '') {
      setItems([...items, inputValue])
      setInputValue('')
    }
  }
  useEffect(() => {
    console.log('ListItems updated')
  }, [])
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Input your text..."
      />
      <button onClick={addElement}>Add element</button>
      <ul>
        {items && items.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  )
}

export default ListItems
