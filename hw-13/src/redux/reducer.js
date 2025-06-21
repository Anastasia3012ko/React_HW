const initialState = {
    users: [
       { id: 1, name: 'Anna'},
       { id: 2, name: 'Sveta'},
       { id: 3, name: 'Anton'},
       { id: 4, name: 'Ivan'},
       { id: 5, name: 'Valentina'},
       { id: 6, name: 'Simon'},
       { id: 7, name: 'Katerina'},
       { id: 8, name: 'Michael'},
       { id: 9, name: 'Leo'},
             
    ],
    filter: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_FILTER': 
            return { ...state, filter: action.payload}
        default:
            return state
    }
}

export default reducer