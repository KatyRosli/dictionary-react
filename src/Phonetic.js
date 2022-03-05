import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  const [play, setPlay] = useState(false);

  function handleClick() {
    setPlay(true);
  }

  return (
    <div className="Phonetic">
      <button onClick={handleClick}>
        <i className="fas fa-volume-up"></i>
      </button>
      {play && (
        <ReactAudioPlayer
          src={props.phonetic.audio}
          autoPlay
          onEnded={() => setPlay(false)}
        />
      )}
    </div>
  );
}
