type Props = {
  index: number
  total: number
  starred: boolean
  sortingEnabled: boolean
  showDefinitionFirst: boolean
  starredOnly: boolean
  canPrev: boolean
  canNext: boolean
  onPrev: () => void
  onNext: () => void
  onShuffle: () => void
  onToggleStar: () => void
  onKnow: () => void
  onStillLearning: () => void
  onToggleSorting: () => void
  onToggleOrientation: () => void
  onToggleStarredOnly: () => void
  onRestart: () => void
  optionsOpen: boolean
  onToggleOptions: () => void
}

export function StudyControls({
  index,
  total,
  starred,
  sortingEnabled,
  showDefinitionFirst,
  starredOnly,
  canPrev,
  canNext,
  onPrev,
  onNext,
  onShuffle,
  onToggleStar,
  onKnow,
  onStillLearning,
  onToggleSorting,
  onToggleOrientation,
  onToggleStarredOnly,
  onRestart,
  optionsOpen,
  onToggleOptions,
}: Props) {
  return (
    <div className="study-controls">
      <div className="study-nav">
        <button type="button" className="btn-icon" onClick={onPrev} disabled={!canPrev} aria-label="Carte précédente">
          ‹
        </button>
        <span className="study-progress">
          {total === 0 ? '0 / 0' : `${index + 1} / ${total}`}
        </span>
        <button type="button" className="btn-icon" onClick={onNext} disabled={!canNext} aria-label="Carte suivante">
          ›
        </button>
      </div>

      {sortingEnabled && (
        <div className="study-sort">
          <button type="button" className="btn-sort learning" onClick={onStillLearning}>
            Encore en apprentissage
          </button>
          <button type="button" className="btn-sort known" onClick={onKnow}>
            Je sais
          </button>
        </div>
      )}

      <div className="study-actions">
        <button type="button" className="btn-ghost" onClick={onShuffle}>
          Mélanger
        </button>
        <button
          type="button"
          className={`btn-ghost star${starred ? ' is-active' : ''}`}
          onClick={onToggleStar}
          aria-pressed={starred}
        >
          {starred ? '★ Étoilée' : '☆ Étoile'}
        </button>
        <div className="options-wrap">
          <button type="button" className="btn-ghost" onClick={onToggleOptions} aria-expanded={optionsOpen}>
            Options
          </button>
          {optionsOpen && (
            <div className="options-panel">
              <label className="option-row">
                <input type="checkbox" checked={sortingEnabled} onChange={onToggleSorting} />
                Tri Encore / Je sais
              </label>
              <label className="option-row">
                <input type="checkbox" checked={showDefinitionFirst} onChange={onToggleOrientation} />
                Définition en premier
              </label>
              <label className="option-row">
                <input type="checkbox" checked={starredOnly} onChange={onToggleStarredOnly} />
                Étoilées seulement
              </label>
              <button type="button" className="btn-ghost option-restart" onClick={onRestart}>
                Recommencer le jeu
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
