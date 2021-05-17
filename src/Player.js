import './Player.css'
import PropTypes from 'prop-types'

Player.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  onClick: PropTypes.func,
}

export default function Player({ name, number, onClick }) {
  return (
    <section className="Player">
      {name}
      <button onClick={onClick}>&#8592;</button>
      {number}
      <button onClick={onClick}>&#8594;</button>
    </section>
  )
}
