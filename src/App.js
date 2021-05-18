import { useState } from 'react'
import Button from './Button'
import Player from './Player'
import PlayerForm from './PlayerForm'

function App() {
  const [players, setPlayers] = useState([
    { name: 'Jane Doe', score: 20 },
    { name: 'John Doe', score: 50 },
  ])
  return (
    <div className="App">
      {players.map((player, index) => (
        <Player
          key={player.name}
          onMinus={() => handleMinus(index)}
          onPlus={() => handlePlus(index)}
          name={player.name}
          score={player.score}
        />
      ))}
      <Button onClick={resetScores}>Reset scores</Button>
      <Button onClick={resetAll}>Reset All</Button>
      <PlayerForm onSubmit={createPlayer} />
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
