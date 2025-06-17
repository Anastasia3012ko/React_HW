import '../styles/App.css'
import ArticlesList from '../pages/ArticlesList'
import MyRouters from './MyRouters'
import Navigation from './Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <MyRouters />
    </div>
  )
}

export default App
