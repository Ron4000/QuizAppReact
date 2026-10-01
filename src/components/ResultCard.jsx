import './ResultCard.css'

export default function ResultCard({ score, totalQuestions, percentage, onRetake, onHome }) {
  const stats = [
    { label: 'Total questions', value: totalQuestions },
    { label: 'Correct answers', value: score, tone: 'positive' },
    { label: 'Incorrect answers', value: totalQuestions - score, tone: 'negative' },
    { label: 'Final score', value: `${score} / ${totalQuestions}` },
    { label: 'Percentage', value: `${percentage}%` },
  ]

  const message = percentage >= 80
    ? 'Excellent!'
    : percentage >= 50
      ? 'Good job!'
      : 'Keep practicing!'

  return (
    <section className="result-card" aria-labelledby="result-title">
      <p className="result-card__eyebrow">YOUR RESULTS</p>
      <h1 className="result-card__title" id="result-title">Quiz Completed</h1>
      <p className="result-card__message">{message}</p>
      <p className="result-card__label">Your score:</p>
      <div className="result-score" aria-label={`Score: ${score} out of ${totalQuestions}`}>
        <span className="result-score__number">{score}</span>
        <span className="result-score__divider">/</span>
        <span className="result-score__total">{totalQuestions}</span>
      </div>
      <dl className="result-stats">
        {/* map() keeps every result statistic consistent and easy to extend. */}
        {stats.map((stat) => (
          <div className="result-stats__item" key={stat.label}>
            <dt>{stat.label}</dt>
            <dd className={stat.tone ? `result-stats__value--${stat.tone}` : undefined}>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <div className="result-card__actions">
        <button className="button button--primary" type="button" onClick={onRetake}>Retake Quiz</button>
        <button className="button button--secondary" type="button" onClick={onHome}>Return Home</button>
      </div>
    </section>
  )
}