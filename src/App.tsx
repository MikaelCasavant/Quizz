import { useState } from 'react'
import { Home } from './components/Home'
import { Study } from './components/Study'
import { Quiz } from './components/Quiz'
import { useProgress } from './hooks/useProgress'

type View = 'home' | 'study' | 'quiz'

export default function App() {
  const [view, setView] = useState<View>('home')
  const progress = useProgress()

  return (
    <div className="app-shell">
      <div className="app-atmosphere" aria-hidden="true" />
      {view === 'home' && (
        <Home
          onStudy={() => setView('study')}
          onQuiz={() => setView('quiz')}
          progress={progress}
        />
      )}
      {view === 'study' && (
        <Study
          onBack={() => setView('home')}
          onQuiz={() => setView('quiz')}
          progress={progress}
        />
      )}
      {view === 'quiz' && (
        <Quiz onBack={() => setView('home')} onStudy={() => setView('study')} />
      )}
    </div>
  )
}
