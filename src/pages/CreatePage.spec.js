import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreatePage from './CreatePage'

describe('CreatePage', () => {
  it('renders two input fields and a button', () => {
    render(<CreatePage />)
    const button = screen.getByRole('button')
    const inputs = screen.getAllByRole('textbox')
    expect(button).toBeInTheDocument()
    expect(inputs).toHaveLength(2)
  })

  it('sends nameOfGame and player details when clicking on button', () => {
    const handleSubmit = jest.fn()
    const setCurrentPageId = 'create'
    render(
      <CreatePage
        onSubmit={handleSubmit}
        onNavigate={setCurrentPageId}
        nameofGame="Carcasonne"
      />
    )
    const submitButton = screen.getByRole('button')
    userEvent.click(submitButton)
    expect(handleSubmit).toHaveBeenCalledWith({
      nameOfGame: '',
      players: [{ name: '', score: 0 }],
    })
  })
})
