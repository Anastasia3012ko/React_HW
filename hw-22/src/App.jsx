import Quote from "./components/Quote"
import styles from './App.module.css'



function App() {


  return (
    <div className={styles.wrapper}>
     <h3>Random Quote Generator:</h3>
     <Quote/>
    </div>
  )
}

export default App
