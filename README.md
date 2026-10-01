# Frontend Quiz

A responsive React quiz for practicing frontend fundamentals. Answer 12 questions about HTML, CSS, JavaScript, and React, then review your score.

## Features

- 12 multiple-choice questions with four answers each
- Keyboard-accessible answer selection and visible focus states
- Progress indicator, answer feedback, and score summary
- Retake and home navigation
- Hash-based routing for GitHub Pages

## Tech stack

React, Vite, React Router, and plain CSS.

## Screenshots

Add screenshots here after capturing the app.

## Setup

```sh
npm install
npm run dev
```

## Build and deploy

```sh
npm run build
npm run preview
```

Push to the `main` branch to deploy with GitHub Actions. In the repository settings, set **Pages** to **GitHub Actions**. The repository name is configured as the `base` value in `vite.config.js`; update it if the repository name changes.

## Folder structure

```text
src/
  components/
  data/
  hooks/
  pages/
  styles/
  App.jsx
  main.jsx
```

## React concepts used

- `.map()` renders choices in `QuestionCard.jsx` and score statistics in `ResultCard.jsx`.
- Hooks: `useQuiz.js` holds quiz state; pages and components use `useState`, `useEffect`, `useMemo`, and `useNavigate` where needed.
- Conditional rendering: `QuizPage.jsx`, `QuestionCard.jsx`, `AnswerOption.jsx`, and `ResultCard.jsx` handle progress, answer feedback, button state, and score messages.