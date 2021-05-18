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
      {name}
      <button onClick={onMinus}>&minus;</button>
      {score}
      <button onClick={onPlus}>&#43;</button>
    </section>
  )
}
