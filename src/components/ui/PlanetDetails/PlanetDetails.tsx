import { Planet } from '@/interface/PlanetInterface'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { usePlanetDetails } from './PlanetDetails.modules'
import Image from 'next/image'

interface CategoryProps {
  title: string
  isOpen: boolean
  toggle: () => void
  children: React.ReactNode
}

const Category = ({ title, isOpen, toggle, children }: CategoryProps) => (
  <div>
    <div
      onClick={toggle}
      className="cursor-pointer p-2 bg-black rounded-md flex items-center justify-between w-full"
    >
      <p className="text-yellow-500 text-xl text-center">{title}</p>
      {isOpen ? <ChevronUp color="#eab308" /> : <ChevronDown color="#eab308" />}
    </div>
    {isOpen && (
      <div className="text-left bg-black/70 rounded-md p-2 text-yellow-500">
        {children}
      </div>
    )}
  </div>
)

const PlanetDetails = ({
  planet,
  loading
}: {
  planet: Planet
  loading: boolean
}) => {
  const { openCategories, toggleCategory } = usePlanetDetails()

  return (
    <div className="flex flex-col items-center gap-2 justify-center">
      {loading ? (
        <p className="text-yellow-500 text-lg">
          Carregando informações do planeta...
        </p>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center text-black">
            Planeta:{' '}
            <span className="text-yellow-500 font-bold">{planet?.name}</span>
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 overflow-auto max-h-[410px]">
            <div className="space-y-2">
              <Category
                title="Informações Gerais"
                isOpen={!!openCategories['Informações Gerais']}
                toggle={() => toggleCategory('Informações Gerais')}
              >
                <p>Clima: {planet?.climate}</p>
                <p>Diâmetro: {planet?.diameter}</p>
                <p>Gravidade: {planet?.gravity}</p>
                <p>Terreno: {planet?.terrain}</p>
              </Category>

              <Category
                title="Detalhes Orbitais e Rotacionais"
                isOpen={!!openCategories['Detalhes Orbitais']}
                toggle={() => toggleCategory('Detalhes Orbitais')}
              >
                <p>Orbital Period: {planet?.orbital_period}</p>
                <p>Rotação: {planet?.rotation_period}</p>
                <p>Abordagem: {planet?.surface_water}</p>
              </Category>
            </div>

            <div className="space-y-2">
              <Category
                title="População e Cultura"
                isOpen={!!openCategories['População e Cultura']}
                toggle={() => toggleCategory('População e Cultura')}
              >
                <p>População: {planet?.population}</p>
                <p>
                  Personagens:{' '}
                  {planet?.residents.length > 0
                    ? planet.residents
                    : 'Não há personagens'}
                </p>
              </Category>

              <Category
                title="Contribuições Cinematográficas"
                isOpen={!!openCategories['Contribuições Cinematográficas']}
                toggle={() => toggleCategory('Contribuições Cinematográficas')}
              >
                <p>
                  Filmes:{' '}
                  {planet?.films.length > 0 ? planet.films : 'Não há filmes'}
                </p>
              </Category>
            </div>
          </div>
          <Image
            alt="Logo do Star Wars"
            src="/images/star-wars-expand.png"
            width={300}
            height={50}
          />
        </>
      )}
    </div>
  )
}

export default PlanetDetails
