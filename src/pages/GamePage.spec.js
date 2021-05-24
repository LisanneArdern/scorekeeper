import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import GamePage from './GamePage'

describe('GamePage', () => {
  it('returns a header and 6 buttons', () => {
    render(
      <GamePage
        nameOfGame="Carcassonne"
        players={[
          { name: 'John', score: 2 },
          { name: 'Jane', score: 3 },
        ]}
      />
    )
    const buttons = screen.getAllByRole('button')

    expect(screen.getByRole('heading')).toHaveTextContent('Carcassonne')
    expect(buttons.length).toBe(6)
  })

  it('calls onResetScores and onEndGame correctly', async () => {
    const resetScores = jest.fn()
    const endGame = jest.fn()

    render(
      <GamePage
        nameOfGame="Carcassonne"
        players={[
          { name: 'John', score: 2 },
          { name: 'Jane', score: 3 },
        ]}
        onResetScores={resetScores}
        onEndGame={endGame}
      />
    )

    const scoresButton = screen.getByRole('button', { name: 'Reset scores' })
    userEvent.click(scoresButton)
    expect(resetScores).toBeCalled()

    const endButton = screen.getByRole('button', { name: 'End game' })
    userEvent.click(endButton)
    expect(endGame).toBeCalled()
  })
})
