import { render, screen } from '@testing-library/react'
import Title from './Title'

describe('Title', () => {
  it('contains a text', async () => {
    render(<Title>Carcasonne</Title>)

    expect(screen.getByText('Carcasonne')).toBeInTheDocument()
  })
})
