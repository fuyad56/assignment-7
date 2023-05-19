import React from 'react';
import './Selection.css';

const Selection = ({ player }) => {
    const totalSalary = player.reduce((total, currentPlayer) => total + currentPlayer.salary, 0);
    
  return (
    <div className='select'>
      <div className="salary">
        <h1>Player added: {player.length}</h1>
        <p>Net Salary: ${totalSalary}</p>
      </div>
      <div className="player-cards">
        
        {player.map((selectedPlayer) => (
          <div key={selectedPlayer.id} className="player-card">
            <div className="player-image">
                <img src={selectedPlayer.image} alt={selectedPlayer.name} />
            </div>
            <div className="player-details">
                <h3>{selectedPlayer.name}</h3>
                <p>Salary: ${selectedPlayer.salary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selection;
