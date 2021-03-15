import React from 'react';
import LibrarySong from './LibrarySong';
import Song from './Song';

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  playing,
  setSongs,
  libraryStatus,
}) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            id={song.id}
            songs={songs}
            setCurrentSong={setCurrentSong}
            song={song}
            audioRef={audioRef}
            playing={playing}
            setSongs={setSongs}
          />
        ))}
        ;
      </div>
    </div>
  );
};

export default Library;
