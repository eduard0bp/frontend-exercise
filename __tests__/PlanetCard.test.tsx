import { render, screen } from '@testing-library/react'
import { PlanetCard } from '@/components/ui'
import '@testing-library/jest-dom'

describe('PlanetCard', () => {
  const mockSetPlanetId = jest.fn()
  const planet = {
    name: 'Yavin IV',
    rotation_period: '24',
    orbital_period: '4818',
    diameter: '10200',
    climate: 'temperate, tropical',
    gravity: '1 standard',
    terrain: 'jungle, rainforests',
    surface_water: '8',
    population: '1000',
    residents: [],
    films: ['https://swapi.dev/api/films/1/'],
    created: '2014-12-10T11:37:19.144000Z',
    edited: '2014-12-20T20:58:18.421000Z',
    url: 'https://swapi.dev/api/planets/3/'
  }

  test('should render correctly', () => {
    render(<PlanetCard planet={planet} setPlanetId={mockSetPlanetId} />)

    expect(screen.getByText('Yavin IV')).toBeInTheDocument()
    expect(screen.getByText('População: 1000')).toBeInTheDocument()
    expect(screen.getByText('Gravidade: 1 standard')).toBeInTheDocument()
    expect(screen.getByText('Clima: temperate, tropical')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Ver mais detalhes' })
    ).toBeInTheDocument()
  })
})
