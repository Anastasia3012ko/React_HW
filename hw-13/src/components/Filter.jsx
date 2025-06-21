import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../redux/actions'
import styles from '../styles/Filter.module.css'

const Filter = ({filter, setFilter}) => {
   
  return (
    <div className={styles.wrapper}>
        <input 
            type="text" 
            className={styles.input} 
            placeholder='Enter the name you are looking for..' 
            value={filter}
            onChange={(event) => {setFilter(event.target.value)}}
        />
    </div>
  )
}
 const mapStateToProps = (state) => ({
    filter: state.filter
})
export default connect(mapStateToProps, { setFilter })(Filter)