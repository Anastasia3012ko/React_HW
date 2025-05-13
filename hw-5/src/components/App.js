
import '../styles/App.css';
import Header from './Header';
import Spotify from '../assets/Spotify.svg'

function App() {
  return (
    <div className="App">
      <img className='spotify' src={Spotify} alt='spotify'/>
      <Header/>
    </div>
  );
}

export default App;
