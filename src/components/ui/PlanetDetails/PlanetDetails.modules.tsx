'use client'
import { useState } from 'react'

export const usePlanetDetails = () => {
  const [openCategories, setOpenCategories] = useState<{
    [key: string]: boolean
  }>({})

  const toggleCategory = (categoryName: string) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }))
  }

  return {
    openCategories,
    toggleCategory
  }
}
