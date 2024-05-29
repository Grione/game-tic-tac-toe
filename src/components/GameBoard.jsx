export default function GameBoard({ onChange, board }) {
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
                          <button onClick={() => onChange(rowIndex, colIndex)}
                          disabled={col !== null}
                          >{col}</button>
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