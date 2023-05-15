import { useEffect, useState } from 'react'

export const useDebounce = (value) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value)
    }, 200)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [value])

  return debounceValue
}
