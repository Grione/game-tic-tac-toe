import { useState } from "react"

export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEditClick() {
    setIsEditing(editing => !editing);
  }

  function handleEditInput(event) {
    setPlayerName(event.target.value);
  }

  let playerEditedName = <span className="player-name">{playerName}</span>;

  if (isEditing) playerEditedName = <input type="text" value={playerName} required onChange={handleEditInput} />

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