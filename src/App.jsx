import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { questions } from './data/questions.js'
import useQuiz from './hooks/useQuiz.js'
import HomePage from './pages/HomePage.jsx'
import QuizPage from './pages/QuizPage.jsx'
import ResultPage from './pages/ResultPage.jsx'

export default function App() {
  const quiz = useQuiz(questions)

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage onStart={quiz.startQuiz} totalQuestions={questions.length} />} />
        <Route
          path="/quiz"
          element={
            !quiz.started
              ? <Navigate to="/" replace />
              : quiz.completed
                ? <Navigate to="/result" replace />
                : <QuizPage quiz={quiz} />
          }
        />
        <Route
          path="/result"
          element={
            quiz.started && !quiz.completed
              ? <Navigate to="/quiz" replace />
              : quiz.completed
                ? <ResultPage quiz={quiz} />
                : <Navigate to="/" replace />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}