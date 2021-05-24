import { render, screen } from '@testing-library/react'
import HistoryPage from './HistoryPage'

describe('HistoryPage', () => {
  it('renders nameOfGame and players', () => {
    render(<HistoryPage games={[{ nameOfGame: 'Carcassonne', players: [] }]} />)

    expect(screen.getByRole('heading')).toHaveTextContent('Carcassonne')
  })
})
