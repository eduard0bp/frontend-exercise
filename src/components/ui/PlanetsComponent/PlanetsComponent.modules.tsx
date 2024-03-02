import { usePlanets } from '@/hooks/usePlanets'
import { useState } from 'react'
import { usePlanetsById } from '@/hooks/usePlanetsById'

export const usePlanetsComponents = () => {
  const [planetId, setPlanetId] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)
  const { planets, loading, totalPages } = usePlanets({
    searchTerm,
    page: currentPage
  })
  const { planet, loadingPlanetInfos } = usePlanetsById(planetId)

  const goToNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
    setSearchTerm('')
  }
  const goToPrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
    setSearchTerm('')
  }

  return {
    setPlanetId,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    planets,
    loading,
    totalPages,
    planet,
    loadingPlanetInfos,
    goToNextPage,
    goToPrevPage
  }
}
