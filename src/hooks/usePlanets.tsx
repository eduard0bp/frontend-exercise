'use client'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { BASE_URL, fetcher } from './utils'
import { Planet } from '@/interface/PlanetInterface'

interface UsePlanetsProps {
  searchTerm: string
  page: number
}
export const usePlanets = ({ searchTerm, page }: UsePlanetsProps) => {
  const [planets, setPlanets] = useState<Planet[]>([])
  const [totalPages, setTotalPages] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  const swrKey = searchTerm ? null : `${BASE_URL}/?page=${page}`

  const { data, error, isLoading } = useSWR(swrKey, fetcher)

  useEffect(() => {
    if (data && !searchTerm) {
      setPlanets(data.results)
      const total = Math.ceil(data.count / 10)
      setTotalPages(total)
      setLoading(false)
    }
  }, [data, searchTerm])

  useEffect(() => {
    const fetchAllPlanets = async () => {
      if (searchTerm) {
        setLoading(true)
        let allPlanets: any[] = []
        let currentPage = 1
        let morePagesAvailable = true

        while (morePagesAvailable) {
          const res = await fetcher(`${BASE_URL}/?page=${currentPage}`)
          allPlanets = allPlanets.concat(res.results)
          morePagesAvailable = res.next !== null
          currentPage += 1
        }

        const filteredPlanets = allPlanets.filter(planet =>
          planet.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setPlanets(filteredPlanets)
        setLoading(false)
      }
    }

    if (searchTerm) {
      fetchAllPlanets()
    }
  }, [searchTerm])

  return {
    planets,
    loadingPlanets: isLoading,
    loading,
    error,
    totalPages
  }
}
