import { arrayOf, PropTypes } from 'prop-types'
import styled from 'styled-components'
import Header from '../components/Header/Header'
import Player from '../components/Player/Player'
import Button from '../components/Button/Button'

GamePage.prototype = {
  nameOfGame: PropTypes.string,
  players: arrayOf(
    PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
  ),
  onResetScores: PropTypes.func.isRequired,
  onEndGame: PropTypes.func.isRequired,
}

export default function GamePage({
  nameOfGame,
  players,
  onResetScores,
  onEndGame,
  onPlayerUpdate,
}) {
  return (
    <Grid>
      <Header>{nameOfGame}</Header>
      {players.map(({ name, score }, index) => (
        <Player
          key={name}
          name={name}
          score={score}
          onMinus={onPlayerUpdate(index, -1)}
          onPlus={onPlayerUpdate(index, 1)}
        />
      ))}
      <Button onClick={onResetScores}>Reset scores</Button>
      <Button onClick={onEndGame}>End game</Button>
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
  gap: 20px;
`
