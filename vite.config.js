import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update this path if the GitHub repository name changes.
export default defineConfig({
  base: '/QuizAppReact/',
  plugins: [react()],
})