import AnswerOption from './AnswerOption.jsx'
import './QuestionCard.css'

export default function QuestionCard({ question, questionNumber, selectedAnswer, onSelectAnswer }) {
  return (
    <section className="question-card" aria-labelledby="question-title">
      <p className="question-card__eyebrow">Question {questionNumber}</p>
      <h1 className="question-card__title" id="question-title">{question.question}</h1>
      <fieldset className="question-card__fieldset">
        <legend className="sr-only">Choose one answer</legend>
        <div className="question-card__choices" role="radiogroup" aria-label="Answer choices">
          {/* map() keeps the four options data-driven and gives each choice a stable key. */}
          {question.choices.map((choice, index) => (
            <AnswerOption
              key={`${question.id}-${index}`}
              index={index}
              text={choice}
              selected={selectedAnswer}
              correct={index === question.correctAnswer}
              onSelect={onSelectAnswer}
            />
          ))}
        </div>
      </fieldset>
    </section>
  )
}