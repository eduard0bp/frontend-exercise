import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { PlanetsComponent } from '@/components/ui'

describe('PlanetsComponent', () => {
  test('should render search input, navigation and logo initially', () => {
    render(<PlanetsComponent />)
    expect(screen.getByAltText('Logo do Star Wars')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Buscar planeta...')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
