import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [playerActive, setPlayerActive] = useState('X');

  function handlerOnChange() {
    setPlayerActive((prevPlayerActive) => prevPlayerActive === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" isActive={playerActive === 'X'} symbol="X" />
          <Player initialName="Player 2" isActive={playerActive === 'O'} symbol="O" />
        </ol>
        <GameBoard onChange={handlerOnChange} activePlayer={playerActive}/>
      </div>
    </main>
  )
}

export default App
