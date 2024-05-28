import { useState } from "react"

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({ onChange, activePlayer }) {
  const [board, setBoard] = useState(initialBoard);

  function handlerButtonClick(rowIndex, colIndex) {
    setBoard((prevBoard) => {
      const newBoard = [...prevBoard.map(innerArray => [...innerArray])];
      newBoard[rowIndex][colIndex] = activePlayer;
      return newBoard;
    });

    onChange();
  }

  return (
    <div id="game-board">
      <ol>
        {
          board.map((row, rowIndex) => {
            return (
              <li key={rowIndex}>
                <ol>
                  {
                    row.map((col, colIndex) => {
                      return (
                        <li key={colIndex}>
                          <button onClick={() => handlerButtonClick(rowIndex, colIndex)}>{col}</button>
                        </li>
                      )
                    })
                  }
                </ol>
              </li>
            )
          })
        }
      </ol>

    </div>
  )
}