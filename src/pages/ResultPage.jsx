import { useEffect } from 'react'
import ResultCard from '../components/ResultCard.jsx'
import './ResultPage.css'

export default function ResultPage({ quiz }) {
  useEffect(() => {
    document.title = 'Your Results | Frontend Quiz'
  }, [])

  function handleRetake() {
    quiz.startQuiz()
  }

  function handleHome() {
    quiz.resetQuiz()
  }

  return (
    <div className="result-page page-shell">
      <main className="result-page__main">
        <ResultCard
          score={quiz.score}
          totalQuestions={quiz.totalQuestions}
          percentage={quiz.percentage}
          onRetake={handleRetake}
          onHome={handleHome}
        />
      </main>
    </div>
  )
}