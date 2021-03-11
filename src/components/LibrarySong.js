import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
  const songHandler = () => {
    setCurrentSong(song);
  };
  return (
    <div onClick={songHandler} className="library-song">
      <img alt={song.name} src={song.cover} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
