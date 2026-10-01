import { useMemo, useState } from 'react'

export default function useQuiz(questions) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])
  const [started, setStarted] = useState(false)
  const [completed, setCompleted] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const percentage = useMemo(
    () => Math.round((score / questions.length) * 100),
    [score, questions.length],
  )

  function startQuiz() {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setAnswers([])
    setCompleted(false)
    setStarted(true)
  }

  function submitAnswer() {
    if (selectedAnswer === null || !currentQuestion) return false

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    setAnswers((previousAnswers) => [
      ...previousAnswers,
      { questionId: currentQuestion.id, selectedAnswer, isCorrect },
    ])
    if (isCorrect) setScore((previousScore) => previousScore + 1)

    if (currentQuestionIndex === questions.length - 1) {
      setCompleted(true)
      return true
    }

    setCurrentQuestionIndex((index) => index + 1)
    return false
  }

  function resetQuiz() {
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setAnswers([])
    setStarted(false)
    setCompleted(false)
  }

  return {
    currentQuestion,
    currentQuestionIndex,
    selectedAnswer,
    setSelectedAnswer,
    score,
    answers,
    started,
    completed,
    percentage,
    startQuiz,
    submitAnswer,
    resetQuiz,
    totalQuestions: questions.length,
  }
}