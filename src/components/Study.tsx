import { useCallback, useEffect, useMemo, useState } from 'react'
import { cards, type Card } from '../data/cards'
import { useProgress, type Bucket } from '../hooks/useProgress'
import { Flashcard } from './Flashcard'
import { StudyControls } from './StudyControls'

type Props = {
  onBack: () => void
  onQuiz: () => void
  progress: ReturnType<typeof useProgress>
}

function shuffle<T>(list: T[]): T[] {
  const next = [...list]
  for (let i = next.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[next[i], next[j]] = [next[j], next[i]]
  }
  return next
}

export function Study({ onBack, onQuiz, progress }: Props) {
  const [order, setOrder] = useState<string[]>(() => cards.map((c) => c.id))
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [showDefinitionFirst, setShowDefinitionFirst] = useState(false)
  const [sortingEnabled, setSortingEnabled] = useState(true)
  const [starredOnly, setStarredOnly] = useState(false)
  const [optionsOpen, setOptionsOpen] = useState(false)
  const [animKey, setAnimKey] = useState(0)

  const cardMap = useMemo(() => {
    const map = new Map<string, Card>()
    cards.forEach((c) => map.set(c.id, c))
    return map
  }, [])

  const deck = useMemo(() => {
    return order
      .map((id) => cardMap.get(id))
      .filter((c): c is Card => {
        if (!c) return false
        if (starredOnly && !progress.starred.includes(c.id)) return false
        if (sortingEnabled && progress.buckets[c.id] === 'known') return false
        return true
      })
  }, [order, cardMap, starredOnly, sortingEnabled, progress.starred, progress.buckets])

  useEffect(() => {
    if (index >= deck.length && deck.length > 0) {
      setIndex(deck.length - 1)
    }
  }, [deck.length, index])

  const current = deck[index] ?? null

  const goTo = useCallback((nextIndex: number) => {
    setFlipped(false)
    setIndex(nextIndex)
    setAnimKey((k) => k + 1)
  }, [])

  const assignAndAdvance = useCallback(
    (bucket: Bucket) => {
      if (!current) return
      const at = index
      progress.setBucket(current.id, bucket)
      setFlipped(false)
      if (bucket === 'learning' && at < deck.length - 1) {
        setIndex(at + 1)
      }
      setAnimKey((k) => k + 1)
    },
    [current, progress, index, deck.length],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (e.code === 'Space') {
        e.preventDefault()
        setFlipped((f) => !f)
      } else if (e.code === 'ArrowLeft' && index > 0) {
        goTo(index - 1)
      } else if (e.code === 'ArrowRight' && index < deck.length - 1) {
        goTo(index + 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, deck.length, goTo])

  const restart = () => {
    progress.clearBuckets()
    setOrder(cards.map((c) => c.id))
    setIndex(0)
    setFlipped(false)
    setStarredOnly(false)
    setAnimKey((k) => k + 1)
    setOptionsOpen(false)
  }

  return (
    <section className="view study-view">
      <header className="view-header">
        <button type="button" className="btn-ghost" onClick={onBack}>
          ← Accueil
        </button>
        <div className="bucket-stats">
          <span>Apprentissage : {progress.learningCount}</span>
          <span>Je sais : {progress.knownCount}</span>
        </div>
        <button type="button" className="btn-ghost" onClick={onQuiz}>
          Passer au quiz →
        </button>
      </header>

      {current ? (
        <div key={animKey} className="study-stage card-enter">
          <Flashcard
            card={current}
            flipped={flipped}
            showDefinitionFirst={showDefinitionFirst}
            onFlip={() => setFlipped((f) => !f)}
          />
          <StudyControls
            index={index}
            total={deck.length}
            starred={progress.isStarred(current.id)}
            sortingEnabled={sortingEnabled}
            showDefinitionFirst={showDefinitionFirst}
            starredOnly={starredOnly}
            canPrev={index > 0}
            canNext={index < deck.length - 1}
            onPrev={() => goTo(index - 1)}
            onNext={() => goTo(index + 1)}
            onShuffle={() => {
              setOrder(shuffle(order))
              setIndex(0)
              setFlipped(false)
              setAnimKey((k) => k + 1)
            }}
            onToggleStar={() => progress.toggleStar(current.id)}
            onKnow={() => assignAndAdvance('known')}
            onStillLearning={() => assignAndAdvance('learning')}
            onToggleSorting={() => setSortingEnabled((v) => !v)}
            onToggleOrientation={() => {
              setShowDefinitionFirst((v) => !v)
              setFlipped(false)
            }}
            onToggleStarredOnly={() => {
              setStarredOnly((v) => !v)
              setIndex(0)
              setFlipped(false)
            }}
            onRestart={restart}
            optionsOpen={optionsOpen}
            onToggleOptions={() => setOptionsOpen((v) => !v)}
          />
        </div>
      ) : (
        <div className="empty-deck">
          <h2>Jeu terminé</h2>
          <p>
            {sortingEnabled
              ? 'Toutes les cartes sont dans « Je sais », ou aucune étoile ne correspond au filtre.'
              : 'Aucune carte à afficher avec les options actuelles.'}
          </p>
          <div className="empty-actions">
            <button type="button" className="btn-primary" onClick={restart}>
              Recommencer
            </button>
            <button type="button" className="btn-secondary" onClick={onQuiz}>
              Lancer le quiz
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
