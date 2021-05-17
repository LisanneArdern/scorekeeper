import './PlayerForm.css'
import PropTypes from 'prop-types'

PlayerForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function PlayerForm({ onSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="PlayerForm">
      <label>
        Add player:
        <input name="name" type="text" placeholder="name" />
      </label>
    </form>
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
