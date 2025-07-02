import { useCallback, useMemo, useState } from 'react'
import UserList from './UserList'
import styles from './styles/App.module.css'

function App() {
  const [filter, setFilter] = useState('')

  const usersList = useMemo(
    () => [
      { id: 1, name: 'Anna' },
      { id: 2, name: 'Maria' },
      { id: 3, name: 'Ivan' },
      { id: 4, name: 'Vera' },
      { id: 5, name: 'Paul' },
    ],
    []
  )

  const filterUsers = useCallback(
    (filterText) => {
      return usersList.filter((user) =>
        user.name.toLowerCase().includes(filterText.trim().toLowerCase())
      )
    },
    [usersList]
  )

  const filteredUsers = useMemo(() => {
    return filterUsers(filter)
  }, [filter, filterUsers])

  return (
    <div className={styles.wrapper}>
      <h3>Users list:</h3>
      <input className={styles.input}
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Enter the name you are looking for.."
      />
      <UserList users={filteredUsers} />
    </div>
  )
}

export default App
