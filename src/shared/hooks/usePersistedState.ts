import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(
  key: string,
  initialState: T,
  type: 'string' | 'object' = 'object'
): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key)
    if (storageValue) {
      return type === 'object' ? JSON.parse(storageValue) : storageValue
    } else {
      return initialState
    }
  })

  useEffect(() => {
    const value = type === 'object' ? JSON.stringify(state) : state
    localStorage.setItem(key, value)
  }, [key, state, type])

  return [state, setState]
}

export default usePersistedState
