import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function setActivePlayer(gameTurns) {
  let activePlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    activePlayer = 'O';
  }

  return activePlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  let currentPlayer = setActivePlayer(gameTurns);

  function handlerOnChange(rowIndex, colIndex) {
    setGameTurns((prevGameTurns) => {
      const activePlayer = setActivePlayer(prevGameTurns);

      const updatedGameTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevGameTurns]

      return updatedGameTurns;
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" isActive={currentPlayer === 'X'} symbol="X" />
          <Player initialName="Player 2" isActive={currentPlayer === 'O'} symbol="O" />
        </ol>
        <GameBoard onChange={handlerOnChange} turns={gameTurns} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
