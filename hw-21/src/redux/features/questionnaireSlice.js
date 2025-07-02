import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [
        {
            id: 1, 
            question: 'What is the capital of Italy?',
            options: ['Rome', 'Milan'],
            correctAnswer: 'Rome'
        },
         {
            id: 2, 
            question: 'What is the capital of England?',
            options: ['Liverpool', 'London'],
            correctAnswer: 'London'
        },
         {
            id: 3, 
            question: 'What is the capital of Germany?',
            options: ['Berlin', 'Munich'],
            correctAnswer: 'Berlin'
        },
         {
            id: 4, 
            question: 'What is the capital of France?',
            options: ['Strasbourg', 'Paris'],
            correctAnswer: 'Paris'
        }
    ],
    answers: {},
    submitted: false
}

const questionnaireSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        answerQuestion: (state, action) => {
            const { questionId, answer } = action.payload
            state.answers[questionId] = answer
        },
        answersSubmit: (state) => {
            state.submitted = true
        },
        resetAnswers: (state) => {
            state.answers = {},
            state.submitted = false
        }


    }
})

export const { answerQuestion, answersSubmit, resetAnswers } = questionnaireSlice.actions
export default questionnaireSlice.reducer