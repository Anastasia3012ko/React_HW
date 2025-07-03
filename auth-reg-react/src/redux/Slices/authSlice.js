import { createSlice } from '@reduxjs/toolkit'

const saveUser = JSON.parse(localStorage.getItem('registeredUser'))

const initialState = {
  registeredUser: saveUser || null,
  isAuth: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.registeredUser = action.payload
      localStorage.setItem('registeredUser', JSON.stringify(action.payload))
      state.error = null
    },
    login: (state, action) => {
      const { email, password } = action.payload
      
      if (
        state.registeredUser &&
        state.registeredUser.email === email &&
        state.registeredUser.password === password
      ) {
        state.isAuth = true
        state.error = null
      } else {
        state.isAuth = false,
        state.error = 'Incorrect login or password'
      }
    },
    logOut: (state) => {
        state.isAuth = false
        state.error = null
    }
  },
})

export default authSlice.reducer
export const { register, login, logOut } = authSlice.actions
