import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation/Navigation'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import { Switch, Route } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function App() {
  const [history, setHistory] = useState([])
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')

  const { push } = useHistory()

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <CreatePage onSubmit={handleSubmit} />
        </Route>
        <Route exact path="/game">
          <GamePage
            onResetScores={resetScores}
            onEndGame={handleEndGame}
            onPlayerUpdate={updateScore}
            nameOfGame={nameOfGame}
            players={players}
          />
        </Route>
        <Route exact path="/history">
          <HistoryPage games={history} />
        </Route>
      </Switch>
      <Route path={['/', '/history']}>
        <Navigation
          pages={[
            { title: 'Create', id: '/' },
            {
              title: 'History',
              id: 'history',
              disabled: !history.length,
            },
          ]}
        />
      </Route>
    </AppGrid>
  )

  function handleEndGame() {
    setHistory([{ players, nameOfGame }, ...history])
    push('/history')
  }

  function handleSubmit({ players, nameOfGame }) {
    setPlayers(players)
    setNameOfGame(nameOfGame)
    push('/game')
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function updateScore(index, value) {
    const playerToUpdate = players[index]

    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + value },
      ...players.slice(index + 1),
    ])
  }
}
const AppGrid = styled.div`
  font-family: 'Roboto', sans-serif;
  padding: 16px;
  display: grid;
  grid-template-rows: auto min-content;
  height: 100vh;
`
const NavWraper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  a {
    text-decoration: none;
  }
`
