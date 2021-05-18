import './Player.css'
import PropTypes from 'prop-types'

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <section className="Player">
      <div>{name}</div>
      <button onClick={onMinus}>-</button>
      <div className="Player__score">{score}</div>
      <button onClick={onPlus}>+</button>
    </section>
  )
}
