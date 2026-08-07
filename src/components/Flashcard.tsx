import type { Card } from '../data/cards'

type Props = {
  card: Card
  flipped: boolean
  showDefinitionFirst: boolean
  onFlip: () => void
}

export function Flashcard({ card, flipped, showDefinitionFirst, onFlip }: Props) {
  const front = showDefinitionFirst ? card.definition : card.term
  const back = showDefinitionFirst ? card.term : card.definition
  const frontLabel = showDefinitionFirst ? 'Définition' : 'Terme'
  const backLabel = showDefinitionFirst ? 'Terme' : 'Définition'

  return (
    <button
      type="button"
      className={`flashcard${flipped ? ' is-flipped' : ''}`}
      onClick={onFlip}
      aria-label={flipped ? 'Retourner la carte (recto)' : 'Retourner la carte (verso)'}
    >
      <div className="flashcard-inner">
        <div className="flashcard-face flashcard-front">
          <span className="flashcard-label">{frontLabel}</span>
          <p className="flashcard-text">{front}</p>
          <span className="flashcard-hint">Cliquer ou Espace pour retourner</span>
        </div>
        <div className="flashcard-face flashcard-back">
          <span className="flashcard-label">{backLabel}</span>
          <p className="flashcard-text">{back}</p>
          <span className="flashcard-era">{card.era}</span>
        </div>
      </div>
    </button>
  )
}
