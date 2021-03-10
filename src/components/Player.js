import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, playing, setPlaying }) => {
  //Ref
  const audioRef = useRef(null);
  //Event Handlers
  const playSong = () => {
    if (playing) {
      audioRef.current.pause();
      //Toggles True or False
      setPlaying(!playing);
    } else {
      audioRef.current.play();
      setPlaying(!playing);
    }
  };
  return (
    <div className="player-container">
      <div className="time-controller">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-controller">
        <FontAwesomeIcon className="back" size="3x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSong}
          className="play"
          size="3x"
          icon={faPlay}
        />
        <FontAwesomeIcon className="forward" size="3x" icon={faAngleRight} />
      </div>
      <audio ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
};

export default Player;
