import { PropTypes } from 'prop-types'
import styled from 'styled-components'
import Button from '../components/Button/Button'
import { useHistory } from 'react-router-dom'

CreatePage.prototype = {
  onSubmit: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
}

export default function CreatePage({ onSubmit, onNavigate }) {
  let path = useHistory()
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
    path.push('/game')
    onSubmit(game)
  }
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`
const Form = styled.form`
  display: grid;
  gap: 12px;
  label {
    display: grid;
    gap: 4px;
  }
  input {
    padding: 4px;
  }
`
