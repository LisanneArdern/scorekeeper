import PropTypes from 'prop-types'
import styled from 'styled-components'
import HistoryEntry from '../components/HistoryEntry/HistoryEntry'

HistoryPage.propTypes = {
  games: PropTypes.arrayOf(
    PropTypes.shape({
      nameOfGame: PropTypes.string,
      players: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string, score: PropTypes.number })
      ),
    })
  ),
}
export default function HistoryPage({ games, onNavigate }) {
  return (
    <Grid>
      {games.map((game, index) => (
        <HistoryEntry
          key={index}
          nameOfGame={game.nameOfGame}
          players={game.players}
        />
      ))}
    </Grid>
  )
}

const Grid = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-space-between;
  gap: 20px;
`
