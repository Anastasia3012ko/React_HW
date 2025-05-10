import '../styles/App.css'
import Greeting from './Greeting';
import OrderStatus from './OrderStatus';
import ShoppingList from './ShoppingList';
import styles from '../styles/ShoppingList.module.css'

function App() {
    const greetingName = 'Anastasia'
    const productsList = ['Apple','Milk','Breed','Butter','Fish'] 
    const orders = [
      {orderId: 1, status: 'delivered'},
      {orderId: 2, status: 'on the way'},
      {orderId: 3, status: 'awaiting delivery'},
      {orderId: 4, status: 'delivered'},
      {orderId: 5, status: 'on the way'},
      {orderId: 6, status: 'awaiting delivery'}
    ]

  return (
    <div className="App">
      <Greeting name={greetingName}/>
      <h3>Shopping list:</h3>
      <ShoppingList array={productsList}/>
      <h3>Orders list:</h3>
      <ul className={styles.listWrapper}>
        {orders.map(item => (<OrderStatus key={item.id} orderId={item.orderId} status={item.status}/>))}
      </ul>
    </div>
  );
}

export default App;
