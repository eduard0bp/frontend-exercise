import { LandPlot, Orbit } from 'lucide-react'
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
          <div
            key={extractedPlanetId}
            className="h-64 w-56 bg-white rounded-3xl shadow-primary flex flex-col justify-center items-center text-wrap p-1 text-center gap-1"
          >
            <Orbit />
            <h1 className="text-3xl text-yellow-500 font-semibold">
              {planet?.name}
            </h1>
            <p>População: {planet?.population}</p>
            <p>Gravidade: {planet?.gravity}</p>
            <p>Clima: {planet?.climate}</p>
            <Button
              type="button"
              onClick={() => {
                setOpen(true)
                setPlanetId(extractedPlanetId)
              }}
            >
              Ver mais detalhes
              <LandPlot />
            </Button>
          </div>
        )
      })}
    </>
  )
}

export default PlanetCard
