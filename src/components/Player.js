import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Player = () => {
  return (
    <div className="player-container">
      <div className="time-controller">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-controller">
        <FontAwesomeIcon className="back" size="3x" icon={faAngleLeft} />
        <FontAwesomeIcon className="play" size="3x" icon={faPlay} />
        <FontAwesomeIcon className="forward" size="3x" icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
