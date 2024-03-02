'use client'
import {
  Input,
  Modal,
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationNumbers,
  PaginationPrevious,
  PlanetCard,
  PlanetDetails
} from '..'
import { usePlanetsComponents } from './PlanetsComponent.modules'
import Image from 'next/image'

const PlanetsComponent = () => {
  const {
    goToNextPage,
    goToPrevPage,
    currentPage,
    setCurrentPage,
    loading,
    loadingPlanetInfos,
    planet,
    planets,
    searchTerm,
    setPlanetId,
    setSearchTerm,
    totalPages
  } = usePlanetsComponents()

  return (
    <div className="container flex flex-col items-center h-screen py-4 space-y-2 justify-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full h-fit gap-2">
        <Image
          alt="Logo do Star Wars"
          src="/images/star-wars.svg"
          width={300}
          height={100}
        />

        <Input
          type="text"
          placeholder="Buscar planeta..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded shadow-sm focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 lg:w-[50%] w-full"
        />
      </div>

      <div className="flex flex-wrap gap-4 w-full h-full overflow-auto items-center bg-white/10 backdrop-blur-sm rounded-3xl lg:justify-between justify-center p-2">
        {planets.length === 0 ? (
          <div className="flex-1 flex justify-center items-center">
            <p className="text-yellow-500 text-3xl self-center text-wrap text-center">
              Não foi encontrado nenhum planeta com esse nome
            </p>
          </div>
        ) : loading ? (
          <div className="flex-1 flex justify-center items-center">
            <p className="text-yellow-500 text-3xl self-center text-wrap text-center">
              Carregando planetas...
            </p>
          </div>
        ) : (
          <PlanetCard planets={planets} setPlanetId={setPlanetId} />
        )}
      </div>

      <Pagination className="block lg:absolute lg:top-[90px] lg:left-[340px] lg:w-full w-[50%]">
        <PaginationContent>
          <PaginationPrevious
            onClick={goToPrevPage}
            disabled={currentPage === 1}
          />
          <PaginationNumbers
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
          <PaginationNext
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          />
        </PaginationContent>
      </Pagination>

      <Modal>
        <PlanetDetails planet={planet} loading={loadingPlanetInfos} />
      </Modal>
    </div>
  )
}

export default PlanetsComponent
