import './ProgressBar.css'

export default function ProgressBar({ currentQuestion, totalQuestions }) {
  const progress = (currentQuestion / totalQuestions) * 100

  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Quiz progress"
      aria-valuemin={0}
      aria-valuemax={totalQuestions}
      aria-valuenow={currentQuestion}
    >
      <div className="progress__track">
        <div className="progress__fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}