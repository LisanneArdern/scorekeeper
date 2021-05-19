import PropTypes from 'prop-types'
import styled from 'styled-components'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <PlayerFormWrapper onSubmit={handleSubmit}>
      <label>
        Add player:
        <input name="name" type="text" placeholder="name" />
      </label>
    </PlayerFormWrapper>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const input = form.elements.name
    onSubmit(input.value)
    form.reset()
    input.focus()
  }
}

const PlayerFormWrapper = styled.form`
  label {
    font-family: 'Roboto', sans-serif;
    display: grid;
    gap: 10px;
  }
`
