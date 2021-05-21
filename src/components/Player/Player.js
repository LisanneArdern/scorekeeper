import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

Player.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number,
  onMinus: PropTypes.func.isRequired,
  onPlus: PropTypes.func.isRequired,
}

export default function Player({ name, score, onMinus, onPlus }) {
  return (
    <Wrapper>
      <div>{name}</div>
      <button onClick={onMinus}>-</button>
      <Score>{score}</Score>
      <button onClick={onPlus}>+</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 4fr 1fr 1fr 1fr;
  align-items: center;
  gap: 20px;

  button {
    padding: 0.35em 1.2em;
    border: 0.1em solid black;
    margin: 0 0.3em 0.3em 0;
    display: inline-block;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: black;
    text-align: center;
    background-color: white;
  }
`
const Score = styled.div`
  justify-self: center;
`
