import { useState } from 'react'
import styled from 'styled-components/macro'
import Navigation from './components/Navigation/Navigation'
import CreatePage from './pages/CreatePage'
import GamePage from './pages/GamePage'
import HistoryPage from './pages/HistoryPage'
import { Redirect, Switch, Route, Link } from 'react-router-dom'

export default function App() {
  const [currentPageId, setCurrentPageId] = useState('create')
  const [history, setHistory] = useState([])
  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')

  const navButtons = ['create', 'history']

  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <Redirect to={`/${currentPageId}`} />
        </Route>
        <Route path="/create">
          <CreatePage onNavigate={setCurrentPageId} onSubmit={handleSubmit} />
        </Route>

        <Route path="/game">
          <GamePage
            onResetScores={resetScores}
            handleEndGame={handleEndGame}
            onPlayerUpdate={updateScore}
            nameOfGame={nameOfGame}
            players={players}
          />
        </Route>
        <Route path="/history">
          <HistoryPage games={history} onNavigate={setCurrentPageId} />
        </Route>
      </Switch>

      {currentPageId !== 'game' && (
        <NavWraper>
          {navButtons.map(button => (
            <Link to={'/' + button}>
              <Navigation
                currentPageId={currentPageId}
                onNavigate={setCurrentPageId}
                pages={[{ title: button, id: button }]}
              />
            </Link>
          ))}
        </NavWraper>
      )}
    </AppGrid>
  )

  function handleEndGame() {
    setCurrentPageId('history')
    setHistory([{ players, nameOfGame }, ...history])
  }

  function handleSubmit({ players, nameOfGame }) {
    setPlayers(players)
    setNameOfGame(nameOfGame)
    setCurrentPageId('game')
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
