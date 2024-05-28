const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard({ onChange, turns }) {
  let board = initialBoard;

  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    board[row][col] = player;
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
                          <button onClick={() => onChange(rowIndex, colIndex)}>{col}</button>
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