import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import Button from '../components/Button/Button'
import Navigation from '../components/Navigation/Navigation'

CreatePage.prototype = {
  onSubmit: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default function CreatePage({ onSubmit, onNavigate }) {
  return (
    <Grid>
      <Form onSubmit={handleSubmit}>
        <label>
          Name of Game:
          <input name="name" type="text" placeholder="eg. Carcasonne" />
        </label>
        <label>
          Name of Players:
          <input name="players" type="text" placeholder="eg. Jane, John" />
        </label>
        <Button>Create game</Button>
      </Form>
      <Navigation
        currentPageId="create"
        onNavigate={onNavigate}
        pages={[
          { title: 'Create', id: 'create' },
          { title: 'History', id: 'History' },
        ]}
      />
    </Grid>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const nameInput = form.elements.name
    const playersInput = form.elements.players
    const nameOfGame = nameInput.value
    const players = playersInput.value
      .split(',')
      .map(name => ({ name: name.trim(), score: 0 }))

    const game = {
      nameOfGame,
      players,
    }

    onSubmit(game)
  }
}

const Grid = styled.section`
  display: grid;
`
const Form = styled.form`
  display: grid;
`
