import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { answerQuestion } from '../redux/features/questionnaireSlice'
import styles from '../styles/Question.module.css'

const Question = ({ question }) => {
  const dispatch = useDispatch()
  const selectedAnswer = useSelector(
    (state) => state.questions.answers[question.id]
  )
  const handleChange = (e) => {
    dispatch(
      answerQuestion({ questionId: question.id, answer: e.target.value })
    )
  }
  return (
    <div className={styles.question}>
      <p className={styles.text}>{question.question}</p>
      <div className={styles.radio}>
        {question.options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={selectedAnswer === option}
              onChange={handleChange}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}

export default Question
