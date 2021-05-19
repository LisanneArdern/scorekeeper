import { render, screen } from '@testing-library/react'
import Navigation from './Navigation'

describe('Navigation', () => {
  it('contains a text', async () => {
    render(<Navigation onClick={() => {}} />)

    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)
  })
})
