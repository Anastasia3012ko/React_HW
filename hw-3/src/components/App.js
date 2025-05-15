import '../styles/App.css';
import Rating from './Rating';
import List from './List';

function App() {
  return (
    <div className='App'>
      <h3>Task1</h3>
      <Rating/>
      <h3>Task2</h3>
      <List/>
    </div>
  );
}

export default App;
