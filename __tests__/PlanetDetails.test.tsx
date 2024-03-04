import { PlanetDetails } from '@/components/ui'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('PlanetDetails', () => {
  const mockPlanet = {
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

  test('should display the loading message', () => {
    render(<PlanetDetails planet={mockPlanet} loading={true} />)
    expect(
      screen.getByText('Carregando informações do planeta...')
    ).toBeInTheDocument()
  })

  test('should display the planet name', () => {
    render(<PlanetDetails planet={mockPlanet} loading={false} />)
    expect(screen.getByTestId('planet-name')).toHaveTextContent(
      `Planeta: ${mockPlanet.name}`
    )
  })

  test('categories should be expandable', () => {
    render(<PlanetDetails planet={mockPlanet} loading={false} />)
    const categoryTitle = screen.getByText('Informações Gerais')
    fireEvent.click(categoryTitle)
    expect(screen.getByText(`Clima: ${mockPlanet.climate}`)).toBeVisible()
  })

  test('interacting with multiple categories should work as expected', () => {
    render(<PlanetDetails planet={mockPlanet} loading={false} />)
    const generalInfoTitle = screen.getByText('Informações Gerais')
    fireEvent.click(generalInfoTitle)
    expect(screen.getByText(`Clima: ${mockPlanet.climate}`)).toBeVisible()

    const populationTitle = screen.getByText('População e Cultura')
    fireEvent.click(populationTitle)
    expect(
      screen.getByText(`População: ${mockPlanet.population}`)
    ).toBeVisible()

    fireEvent.click(generalInfoTitle)
  })  
})
