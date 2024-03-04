'use client'
import { useState } from 'react'

type CategoryKey =
  | 'Informações Gerais'
  | 'População e Cultura'
  | 'Detalhes Orbitais'
  | 'Contribuições Cinematográficas'

export const usePlanetDetails = () => {
  const [openCategories, setOpenCategories] = useState<{
    [key in CategoryKey]: boolean
  }>({
    'Informações Gerais': true,
    'População e Cultura': true,
    'Detalhes Orbitais': false,
    'Contribuições Cinematográficas': false
  })

  const toggleCategory = (category: CategoryKey) => {
    setOpenCategories(prevState => ({
      ...prevState,
      [category]: !prevState[category]
    }))
  }

  return { openCategories, toggleCategory }
}
