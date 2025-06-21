import Filter from './components/Filter';
import UserList from './components/UserList';
import './styles/App.css'

function App() {
  return (
    <div className='App'>
      <h1>Users List:</h1>
      <Filter/>
      <UserList/>
    </div>
  );
}

export default App;
