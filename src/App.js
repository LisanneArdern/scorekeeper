import { useState } from 'react'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'
import './App.css'

function App() {
  const [players, setPlayers] = useState([
    { name: 'Jane Doe', score: 20 },
    { name: 'John Doe', score: 50 },
  ])
  return (
    <div className="App">
      <div className="App__player-container">
        {players.map((player, index) => (
          <Player
            key={player.name}
            onMinus={() => handleMinus(index)}
            onPlus={() => handlePlus(index)}
            name={player.name}
            score={player.score}
          />
        ))}
      </div>
      <Button onClick={resetScores}>Reset scores</Button>
      <Button onClick={resetAll}>Reset All</Button>
      <div className="App__player-form-container">
        <PlayerForm onSubmit={createPlayer} />
      </div>
    </div>
  )

  function handleMinus(index) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function handlePlus(index) {
    const playerToUpdate = players[index]
    setPlayers([
      ...players.slice(0, index),
      { ...playerToUpdate, score: playerToUpdate.score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function resetScores() {
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  function resetAll() {
    setPlayers([])
  }

  function createPlayer(name) {
    setPlayers([...players, { name, score: 0 }])
  }
}

export default App
