import { cards } from '../data/cards'
import type { useProgress } from '../hooks/useProgress'

type Props = {
  onStudy: () => void
  onQuiz: () => void
  progress: ReturnType<typeof useProgress>
}

export function Home({ onStudy, onQuiz, progress }: Props) {
  return (
    <section className="view home-view">
      <div className="home-hero">
        <p className="home-brand">Québec Mémoire</p>
        <h1 className="home-headline">L’histoire de Québec, carte après carte</h1>
        <p className="home-support">
          {cards.length} faits pour explorer la capitale — de Champlain aux remparts.
        </p>
        <div className="home-ctas">
          <button type="button" className="btn-primary" onClick={onStudy}>
            Étudier
          </button>
          <button type="button" className="btn-secondary" onClick={onQuiz}>
            Quiz
          </button>
        </div>
        {(progress.knownCount > 0 || progress.learningCount > 0 || progress.starred.length > 0) && (
          <p className="home-progress-note">
            Progression : {progress.knownCount} sues · {progress.learningCount} en apprentissage
            {progress.starred.length > 0 ? ` · ${progress.starred.length} étoilées` : ''}
          </p>
        )}
      </div>
    </section>
  )
}
