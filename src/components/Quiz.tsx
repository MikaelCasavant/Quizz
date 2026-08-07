import { useMemo, useState } from 'react'
import { cards, type Card } from '../data/cards'

type Props = {
  onBack: () => void
  onStudy: () => void
  filterIds?: string[] | null
}

type Question = {
  card: Card
  choices: string[]
  answer: string
}

function shuffle<T>(list: T[]): T[] {
  const next = [...list]
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

function buildQuestions(source: Card[], count = 10): Question[] {
  const pool = shuffle(source).slice(0, Math.min(count, source.length))
  return pool.map((card) => {
    const distractors = shuffle(source.filter((c) => c.id !== card.id))
      .slice(0, 3)
      .map((c) => c.term)
    const choices = shuffle([card.term, ...distractors])
    return { card, choices, answer: card.term }
  })
}

export function Quiz({ onBack, onStudy, filterIds = null }: Props) {
  const source = useMemo(() => {
    if (filterIds && filterIds.length > 0) {
      return cards.filter((c) => filterIds.includes(c.id))
    }
    return cards
  }, [filterIds])

  const [questions, setQuestions] = useState<Question[]>(() => buildQuestions(source))
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<string | null>(null)
  const [missed, setMissed] = useState<string[]>([])
  const [correctCount, setCorrectCount] = useState(0)
  const [done, setDone] = useState(false)

  const current = questions[index]

  const pick = (choice: string) => {
    if (selected || !current) return
    setSelected(choice)
    const isCorrect = choice === current.answer
    if (isCorrect) {
      setCorrectCount((n) => n + 1)
    } else {
      setMissed((m) => [...m, current.card.id])
    }
  }

  const next = () => {
    if (index >= questions.length - 1) {
      setDone(true)
      return
    }
    setIndex((i) => i + 1)
    setSelected(null)
  }

  const retryMissed = () => {
    const retrySource = cards.filter((c) => missed.includes(c.id))
    if (retrySource.length === 0) return
    setQuestions(buildQuestions(retrySource, retrySource.length))
    setIndex(0)
    setSelected(null)
    setMissed([])
    setCorrectCount(0)
    setDone(false)
  }

  const restartFull = () => {
    setQuestions(buildQuestions(cards))
    setIndex(0)
    setSelected(null)
    setMissed([])
    setCorrectCount(0)
    setDone(false)
  }

  if (done) {
    const total = questions.length
    const percent = total === 0 ? 0 : Math.round((correctCount / total) * 100)
    return (
      <section className="view quiz-view">
        <header className="view-header">
          <button type="button" className="btn-ghost" onClick={onBack}>
            ← Accueil
          </button>
        </header>
        <div className="results-panel">
          <p className="results-kicker">Résultat</p>
          <h2 className="results-score">
            {correctCount} / {total}
          </h2>
          <p className="results-percent">{percent} % de bonnes réponses</p>
          <div className="empty-actions">
            {missed.length > 0 && (
              <button type="button" className="btn-primary" onClick={retryMissed}>
                Revoir les ratées ({missed.length})
              </button>
            )}
            <button type="button" className="btn-secondary" onClick={restartFull}>
              Nouveau quiz
            </button>
            <button type="button" className="btn-ghost" onClick={onStudy}>
              Retour aux cartes
            </button>
          </div>
        </div>
      </section>
    )
  }

  if (!current) {
    return (
      <section className="view quiz-view">
        <p>Aucune question disponible.</p>
        <button type="button" className="btn-primary" onClick={onBack}>
          Accueil
        </button>
      </section>
    )
  }

  return (
    <section className="view quiz-view">
      <header className="view-header">
        <button type="button" className="btn-ghost" onClick={onBack}>
          ← Accueil
        </button>
        <span className="study-progress">
          Question {index + 1} / {questions.length}
        </span>
        <button type="button" className="btn-ghost" onClick={onStudy}>
          Cartes
        </button>
      </header>

      <div className="quiz-stage">
        <p className="quiz-prompt-label">Que désigne ceci ?</p>
        <h2 className="quiz-prompt">{current.card.definition}</h2>
        <div className="quiz-choices">
          {current.choices.map((choice) => {
            let state = ''
            if (selected) {
              if (choice === current.answer) state = ' is-correct'
              else if (choice === selected) state = ' is-wrong'
            }
            return (
              <button
                key={choice}
                type="button"
                className={`quiz-choice${state}`}
                onClick={() => pick(choice)}
                disabled={Boolean(selected)}
              >
                {choice}
              </button>
            )
          })}
        </div>
        {selected && (
          <button type="button" className="btn-primary quiz-next" onClick={next}>
            {index >= questions.length - 1 ? 'Voir le résultat' : 'Suivant'}
          </button>
        )}
      </div>
    </section>
  )
}
