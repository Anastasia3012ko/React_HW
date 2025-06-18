import { useEffect, useRef, useState } from 'react'
import ValueDisplay from './components/ValueDisplay'
import styles from './styles/App.module.css'

function App() {
  const [value, setValue] = useState('')
  const prevValue = useRef('')
  
  useEffect(() => {
    prevValue.current = value
  }, [value])

  return (
    <div className={styles.app}>
      <h1 style={{color: 'rgb(19, 140, 247'}}>Current and Previous Value</h1>
      <input className={styles.input}
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Enter your text.."
        ref={prevValue}
      />
      <ValueDisplay value={value} prevValue={prevValue.current} />
    </div>
  )
}

export default App
