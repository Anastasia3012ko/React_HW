import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from './features/questionnaireSlice'


const store = configureStore({
    reducer: {
        questions: questionsReducer
    }
})

export default store