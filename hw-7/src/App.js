import LanguageChanger from './components/LanguageChanger'
import Text from './components/Text'
import styles from './styles/App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.App}>
        <LanguageChanger />
        <Text />
      </div>
    </div>
  )
}

export default App
