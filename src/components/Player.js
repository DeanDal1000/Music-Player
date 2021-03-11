import React, { useRef, useState } from 'react';
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

  //Time Handler
  const timeHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime: current, duration });
  };

  //State
  const [songInfo, setSongInfo] = useState({
    currentTime: null,
    duration: null,
  });

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
        <input type="range"></input>
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
      <audio
        onTimeUpdate={timeHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
};

export default Player;
