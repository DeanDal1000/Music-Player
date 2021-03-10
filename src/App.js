import React from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';

function App() {
  return (
    <div className="App">
      <h1>Music</h1>
      <Song />
      <Player />
    </div>
  );
}

export default App;
