import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onPlayerChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing(editing => !editing);

    if (isEditing) {
      onPlayerChange(symbol, playerName);
    }
  }

  function handleEditInput(event) {
    setPlayerName(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleEditClick();
    }
  }

  let playerEditedName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerEditedName = <input
      type="text"
      value={playerName}
      required
      onChange={handleEditInput}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerEditedName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  )
}