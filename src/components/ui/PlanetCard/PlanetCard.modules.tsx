import { useContext } from 'react'
import { ModalContext } from '../Modal/ModalContext'

export const usePlanetCard = () => {
  const { setOpen } = useContext(ModalContext)

  function extractIdFromUrl(url: string) {
    const match = url.match(/\/(\d+)\/$/)
    return match ? match[1] : null
  }

  return {
    extractIdFromUrl,
    setOpen
  }
}
