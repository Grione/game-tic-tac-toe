import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function App() {
  const [playerActive, setPlayerActive] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handlerOnChange(rowIndex, colIndex) {
    setPlayerActive((prevPlayerActive) => prevPlayerActive === 'X' ? 'O' : 'X');

    setGameTurns((prevGameTurns) => {
      let activePlayer = 'X';

      if(gameTurns.length > 0 && prevGameTurns[0].player === 'X') {
        activePlayer = 'O';
      }
      const updatedGameTurns = [{ square: { row: rowIndex, col: colIndex }, player: activePlayer }, ...prevGameTurns]
      
      return updatedGameTurns; 
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" isActive={playerActive === 'X'} symbol="X" />
          <Player initialName="Player 2" isActive={playerActive === 'O'} symbol="O" />
        </ol>
        <GameBoard onChange={handlerOnChange} turns={gameTurns} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
