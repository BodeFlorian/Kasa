import React, { createContext, useState, useEffect, useContext } from 'react'
import useFetch from '../hooks/useFetch'

const LogementsContext = createContext()

export const LogementsProvider = ({ children }) => {
  const [logements, setLogements] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const {
    data,
    isLoading: fetchLoading,
    error: fetchError,
  } = useFetch('/datas/logements.json')

  useEffect(() => {
    if (data) {
      setLogements(data)
      setIsLoading(fetchLoading)
    }
    if (fetchError) {
      setError(fetchError)
      setIsLoading(fetchLoading)
    }
  }, [data, fetchLoading, fetchError])

  return (
    <LogementsContext.Provider value={{ logements, isLoading, error }}>
      {children}
    </LogementsContext.Provider>
  )
}

export const useLogements = () => {
  return useContext(LogementsContext)
}
