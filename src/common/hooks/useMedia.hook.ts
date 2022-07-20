import { useEffect, useState } from 'react'

export const useMedia = (query: string) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches)

  const detect = () => {
    const eventType = 'change'
    const mql = window.matchMedia(query)
    const match = () => setMatches(mql.matches)
    mql.addEventListener(eventType, match)
    return () => mql.removeEventListener(eventType, match)
  }

  useEffect(() => detect(), [query])

  return matches
}
