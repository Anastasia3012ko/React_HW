import { useDispatch, useSelector } from 'react-redux'
import {
  answersSubmit,
  resetAnswers,
} from '../redux/features/questionnaireSlice'
import Question from './Question'
import Result from './Result'
import styles from '../styles/App.module.css'

function App() {
  const dispatch = useDispatch()
  const questions = useSelector((state) => state.questions.questions)
  const answers = useSelector((state) => state.questions.answers)
  const submitted = useSelector((state) => state.questions.submitted)

  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      dispatch(answersSubmit())
    } else {
      alert('Please answer all questions before submitting!')
    }
  }
  const handleReset = () => {
    dispatch(resetAnswers())
  }

  return (
    <div className={styles.wrapperApp}>
      <div className={styles.quiz}>
      <h1>Quiz</h1>
      {questions.map((question) => (
        <Question key={question.id} question={question} />
      ))}
      {!submitted && <button className={styles.buttonSubmit} onClick={handleSubmit}>Submit</button>}
      {submitted && <button className={styles.buttonAgain} onClick={handleReset}>Take the quiz again</button>}
      <Result />
    </div>
    </div>
    
  )
}

export default App
