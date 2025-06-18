

const ValueDisplay = ({value, prevValue}) => {
    return (
    <div>
       <p style={{color: 'rgb(19, 140, 247'}}>Current value: {value}</p>
       <p style={{color: 'rgb(19, 140, 247'}}>Previous value: {prevValue}</p>
    </div>
  )
}

export default ValueDisplay