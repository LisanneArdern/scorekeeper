import PropTypes from 'prop-types'
import styled from 'styled-components'
import HistoryEntry from '../components/HistoryEntry/HistoryEntry'
import Navigation from '../components/Navigation/Navigation'

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

      <Navigation
        currentPageId="history"
        onNavigate={onNavigate}
        pages={[
          { title: 'Create', id: 'create' },
          { title: 'History', id: 'History' },
        ]}
      />
    </Grid>
  )
}

const Grid = styled.section`
  display: grid;
`
