import { useSelector } from 'react-redux'
import styles from '../styles/Result.module.css'

const Result = () => {
  const { questions, answers, submitted } = useSelector(
    (state) => state.questions
  )

  if (!submitted) return null

  const correctCount = questions.reduce((count, question) => {
    return answers[question.id] === question.correctAnswer ? count + 1 : count
  }, 0)

  return (
    <div className={styles.result}>
      <h3 className={styles.header}>Your result:</h3>
      <p className={styles.par}>
        <strong>Correct answers:</strong> {correctCount} <strong>out of </strong>
        {questions.length}
      </p>
    </div>
  )
}

export default Result
