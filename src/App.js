// App.js
import { useEffect, useState } from 'react';
import './App.css';
import Data from './Component/Data/Data.json';
import Player from './Component/Player info/Player';
import Selection from './Component/Selection/Selection';

function App() {
  const [data, setData] = useState(Data);
  useEffect(() => {
    setData(Data);
  }, []);

  const [player, setPlayer] = useState([]);
  const handleAddPlayer = (data) => {
    const isPlayerAdded = player.find((p) => p.id === data.id);
    if (isPlayerAdded) {
      alert('Player is already added!');
      return;
    }

    const newPlayer = [...player, data];
    setPlayer(newPlayer);
  };

  return (
    <div className="">
      <h1 className='data'>Player loaded: {data.length}</h1>
      <div className="details">
        <div className="app">
          {data.map((item) => (
            <Player
              data={item}
              handleAddPlayer={handleAddPlayer}
              key={item.id}
            ></Player>
          ))}
        </div>
        <div className="selection">
          <Selection player={player} />
        </div>
      </div>
    </div>
  );
}

export default App;
