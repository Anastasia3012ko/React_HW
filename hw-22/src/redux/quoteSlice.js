import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    quote: [],
    loading: false,
    error: null
}

export const fetchQuote = createAsyncThunk('quote/fetchQuote', async () => {
  const response = await axios.get('https://zenquotes.io/api/random');
  return response.data
})

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchQuote.pending, (state) => {
            state.loading = true
            state .error = null
        })
        .addCase(fetchQuote.fulfilled, (state, action) => {
            state.loading = false
            state.quote = action.payload
            state.error = null
        })
        .addCase(fetchQuote.rejected, (state, action) => {
            state.loading = false,
            state.error = action.error.message
        })
    }
})

export default quoteSlice.reducer