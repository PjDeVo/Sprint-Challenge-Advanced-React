import React from "react";

function PlayerCard({ players }) {
  return (
    <div>
      {players.map(player => {
        return (
          <div key={player.id} className="player-card-container">
            <h2 className="player-card-name"> {player.name}</h2>
            <div className="player-card-country-container">
              <h3 className="player-card-country"> {player.country} </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PlayerCard;
