import React from 'react';

const LibrarySong = ({
  song,
  songs,
  setCurrentSong,
  id,
  audioRef,
  playing,
  setSongs,
}) => {
  const songHandler = async () => {
    await setCurrentSong(song);
    if (playing) audioRef.current.play();

    //Add Active State
    // const newSongs = songs.map((song) => {
    //   if (song.id === id) {
    //     return {
    //       ...song,
    //       active: true,
    //     };
    //   } else {
    //     return {
    //       ...song,
    //       active: false,
    //     };
    //   }
    // });
    // setSongs(newSongs);

    //check if the song is playing
    if (playing) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      onClick={songHandler}
      className={`library-song ${song.active ? 'selected' : ''}`}
    >
      <img alt={song.name} src={song.cover} />
      <div className="song-info">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
