import { arrayOf, PropTypes } from 'prop-types'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Player from '../components/Player/Player'
import Button from '../components/Button/Button'
import { useHistory } from 'react-router-dom'

GamePage.prototype = {
  nameOfGame: PropTypes.string,
  players: arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
  onResetScores: PropTypes.func.isRequired,
  handleEndGame: PropTypes.func.isRequired,
  onPlayerUpdate: PropTypes.func.isRequired,
}

export default function GamePage({
  nameOfGame,
  players,
  onResetScores,
  handleEndGame,
  onPlayerUpdate,
}) {
  let path = useHistory()
  return (
    <Grid>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onMinus={() => onPlayerUpdate(index, -1)}
          onPlus={() => onPlayerUpdate(index, 1)}
        />
      ))}
      <Button onClick={onResetScores}>Reset scores</Button>
      <Button onClick={onEndGame}>End game</Button>
    </Grid>
  )

  function onEndGame(event) {
    handleEndGame(event)
    path.push('/history')
  }
}

const Grid = styled.section`
  display: grid;
  align-content: start;
  gap: 20px;
`
