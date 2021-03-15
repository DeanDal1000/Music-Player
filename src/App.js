import React, { useRef, useState } from 'react';
import Library from './components/Library';
import Nav from './components/Nav';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import data from './data';

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Time Handler
  const timeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };
  //AutoForwardHandler
  const AutoForwardHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await setCurrentSong(songs[currentIndex + 1] || songs[0]);
    if (playing) audioRef.current.play();
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      {/* Pass State into curly braces */}
      <Song currentSong={currentSong} />
      <Player
        playing={playing}
        setPlaying={setPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs={setSongs}
      />
      <Library
        songs={songs}
        audioRef={audioRef}
        setCurrentSong={setCurrentSong}
        playing={playing}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeHandler}
        onLoadedMetadata={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={AutoForwardHandler}
      ></audio>
    </div>
  );
}

export default App;
