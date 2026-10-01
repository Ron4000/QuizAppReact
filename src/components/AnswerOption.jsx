import './AnswerOption.css'

export default function AnswerOption({ index, text, selected, correct, onSelect }) {
  const isSelected = selected === index
  const stateClass = isSelected ? (correct ? ' answer-option--correct' : ' answer-option--incorrect') : ''

  return (
    <button
      className={`answer-option${isSelected ? ' answer-option--selected' : ''}${stateClass}`}
      type="button"
      role="radio"
      aria-checked={isSelected}
      onClick={() => onSelect(index)}
    >
      <span className="answer-option__letter" aria-hidden="true">{String.fromCharCode(65 + index)}</span>
      <span className="answer-option__text">{text}</span>
      {isSelected && correct && <span className="answer-option__status">Correct</span>}
      {isSelected && !correct && <span className="answer-option__status">Selected</span>}
    </button>
  )
}