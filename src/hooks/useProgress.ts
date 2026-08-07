import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'quebec-memoire-progress'

export type Bucket = 'learning' | 'known'

type ProgressState = {
  starred: string[]
  buckets: Record<string, Bucket>
}

const defaultState: ProgressState = {
  starred: [],
  buckets: {},
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultState
    const parsed = JSON.parse(raw) as ProgressState
    return {
      starred: Array.isArray(parsed.starred) ? parsed.starred : [],
      buckets: parsed.buckets && typeof parsed.buckets === 'object' ? parsed.buckets : {},
    }
  } catch {
    return defaultState
  }
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(load)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  const isStarred = useCallback(
    (id: string) => state.starred.includes(id),
    [state.starred],
  )

  const toggleStar = useCallback((id: string) => {
    setState((prev) => ({
      ...prev,
      starred: prev.starred.includes(id)
        ? prev.starred.filter((s) => s !== id)
        : [...prev.starred, id],
    }))
  }, [])

  const getBucket = useCallback(
    (id: string): Bucket | null => state.buckets[id] ?? null,
    [state.buckets],
  )

  const setBucket = useCallback((id: string, bucket: Bucket) => {
    setState((prev) => ({
      ...prev,
      buckets: { ...prev.buckets, [id]: bucket },
    }))
  }, [])

  const clearBuckets = useCallback(() => {
    setState((prev) => ({ ...prev, buckets: {} }))
  }, [])

  const knownCount = Object.values(state.buckets).filter((b) => b === 'known').length
  const learningCount = Object.values(state.buckets).filter((b) => b === 'learning').length

  return {
    starred: state.starred,
    buckets: state.buckets,
    isStarred,
    toggleStar,
    getBucket,
    setBucket,
    clearBuckets,
    knownCount,
    learningCount,
  }
}
