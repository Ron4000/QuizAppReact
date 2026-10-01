import { useEffect } from 'react'
import QuizHeader from '../components/QuizHeader.jsx'
import ProgressBar from '../components/ProgressBar.jsx'
import QuestionCard from '../components/QuestionCard.jsx'
import './QuizPage.css'

export default function QuizPage({ quiz }) {
  const { currentQuestion, currentQuestionIndex, selectedAnswer, setSelectedAnswer, submitAnswer, totalQuestions } = quiz

  // Reset each question's selection when the question index changes.
  useEffect(() => {
    setSelectedAnswer(null)
  }, [currentQuestionIndex, setSelectedAnswer])

  useEffect(() => {
    document.title = `Question ${currentQuestionIndex + 1} | Frontend Quiz`
  }, [currentQuestionIndex])

  function handleNext() {
    submitAnswer()
  }

  const isLastQuestion = currentQuestionIndex === totalQuestions - 1

  return (
    <div className="quiz-page page-shell">
      <main className="quiz-page__main">
        <QuizHeader currentQuestion={currentQuestionIndex + 1} totalQuestions={totalQuestions} />
        <ProgressBar currentQuestion={currentQuestionIndex + 1} totalQuestions={totalQuestions} />
        <QuestionCard
          key={currentQuestion.id}
          question={currentQuestion}
          questionNumber={currentQuestionIndex + 1}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={setSelectedAnswer}
        />
        <nav className="quiz-page__navigation" aria-label="Quiz navigation">
          <button
            className="button button--primary quiz-page__next"
            type="button"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {isLastQuestion ? 'Finish' : 'Next'} <span aria-hidden="true">→</span>
          </button>
        </nav>
      </main>
    </div>
  )
}