import React from 'react'
import { connect } from 'react-redux'
import styles from '../styles/UserList.module.css'
import UserItem from './UserItem'

const UserList = ({users, filter}) => {
 const filtered = users.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <ul className={styles.list}>
       {filtered.map(user => (
        <UserItem key={user.id} user={user}/>
       ))} 
    </ul>
  )
}
const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter
});

export default connect(mapStateToProps)(UserList)