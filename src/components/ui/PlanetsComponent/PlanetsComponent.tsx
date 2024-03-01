'use client'
import {
  Input,
  Modal,
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationNumbers,
  PaginationPrevious,
  PlanetCard
} from '..'
import { usePlanetsComponents } from './PlanetsComponent.modules'

const PlanetsComponent = () => {
  const {
    goToNextPage,
    goToPrevPage,
    currentPage,
    setCurrentPage,
    loading,
    planet,
    planets,
    searchTerm,
    setPlanetId,
    setSearchTerm,
    totalPages
  } = usePlanetsComponents()

  return (
    <>
      <div>
        <h2>Planetas (Página {currentPage})</h2>
        <Input
          type="text"
          placeholder="Buscar planeta..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-[50%]"
        />

        <PlanetCard planets={planets} setPlanetId={setPlanetId} />

        <Pagination>
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
      </div>
      <Modal planet={planet}>
        <h1>Teste</h1>
      </Modal>
    </>
  )
}

export default PlanetsComponent
