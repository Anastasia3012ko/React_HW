import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [
        {id: 1, name: 'Alice', email: 'alice@mail.com'},
        {id: 2, name: 'Bob', email: 'bob@mail.com'},
        {id: 3, name: 'Ivan', email: 'ivan@mail.com'},
        {id: 4, name: 'Vera', email: 'vera@mail.com'},
    ],
  },
  reducers: {}
})

export default userSlice.reducer
