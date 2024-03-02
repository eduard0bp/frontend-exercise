import { Button } from '..'
import { usePlanetCard } from './PlanetCard.modules'

const PlanetCard = ({
  planets,
  setPlanetId
}: {
  planets: any
  setPlanetId: any
}) => {
  const { extractIdFromUrl, setOpen } = usePlanetCard()

  return (
    <>
      {planets?.map((planet: any) => {
        const extractedPlanetId = extractIdFromUrl(planet?.url)
        return (
          <div key={planet.name}>
            <Button
              type="button"
              onClick={() => {
                setOpen(true)
                setPlanetId(extractedPlanetId)
              }}
            >
              Ver Detalhes
            </Button>
            <li>{planet.name}</li>
            <p>ID: {extractedPlanetId}</p>
          </div>
        )
      })}
    </>
  )
}

export default PlanetCard
