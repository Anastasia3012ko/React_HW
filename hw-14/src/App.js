import User from "./components/User";
import UserForm from "./components/UserForm";
import './styles/App.css'

function App() {
  return (
    <div className="App">
      <h1>User Profile</h1>
      <User/>
      <UserForm/>
    </div>
  );
}

export default App;
