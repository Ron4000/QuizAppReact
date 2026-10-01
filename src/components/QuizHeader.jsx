import './QuizHeader.css'

export default function QuizHeader({ currentQuestion, totalQuestions }) {
  return (
    <header className="quiz-header">
      <a className="quiz-header__brand" href="#/" aria-label="Frontend Quiz home">
        <span>Frontend Quiz</span>
      </a>
      <p className="quiz-header__count" aria-live="polite">
        <span>Question</span> {currentQuestion} <span>of</span> {totalQuestions}
      </p>
    </header>
  )
}