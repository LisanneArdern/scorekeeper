import { render, screen } from '@testing-library/react'
import History from './History'

describe('History', () => {
  it('contains a text', async () => {
    render(<History name="Hanni" />)

    expect(screen.getByText('Hanni')).toBeInTheDocument()
  })
})
