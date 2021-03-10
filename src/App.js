import React, { useState } from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './util';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[1]);
  const [playing, setPlaying] = useState(false);
  return (
    <div className="App">
      <h1>Music</h1>
      {/* Pass State into curly braces */}
      <Song currentSong={currentSong} />
      <Player
        playing={playing}
        setPlaying={setPlaying}
        currentSong={currentSong}
      />
    </div>
  );
}

export default App;
