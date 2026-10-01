import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePage.css'

export default function HomePage({ onStart, totalQuestions }) {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Frontend Quiz | Welcome'
  }, [])

  function handleStart() {
    onStart()
    navigate('/quiz')
  }

  return (
    <div className="home-page page-shell">
      <header className="home-page__topbar">
        <a className="home-page__brand" href="#/" aria-label="Frontend Quiz home">Frontend Quiz</a>
      </header>
      <main className="home-page__main">
        <section className="home-intro" aria-labelledby="welcome-title">
          <h1 className="home-intro__title" id="welcome-title">
            <span>Welcome to the</span>{' '}
            <strong>Frontend Quiz!</strong>
          </h1>
          <p className="home-intro__description">
            Take on {totalQuestions} questions across HTML, CSS, JavaScript, and React. See what you know, and what to explore next.
          </p>
          <button className="button button--primary home-intro__start" type="button" onClick={handleStart}>
            Start Quiz
          </button>
          <p className="home-intro__meta">Mechanics: The Question will not proceed to the next if you do not select an answer. HEHEHEH -Harold</p>
        </section>
      </main>
    </div>
  )
}