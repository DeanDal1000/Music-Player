import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
  currentSong,
  playing,
  setPlaying,
  audioRef,
  setSongInfo,
  songInfo,
}) => {
  //Ref
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

  //Drag Handler
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //Format Time
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player-container">
      <div className="time-controller">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
        ></input>
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-controller">
        <FontAwesomeIcon className="back" size="3x" icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSong}
          className="play"
          size="3x"
          icon={playing ? faPause : faPlay}
        />
        <FontAwesomeIcon className="forward" size="3x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
