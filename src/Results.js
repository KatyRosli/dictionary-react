import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    const phoneticWithAudioIndex = props.results.phonetics.findIndex(
      (phonetic) => phonetic.audio
    );
    const phoneticWithAudio = props.results.phonetics[phoneticWithAudioIndex];
    return (
      <div className="Results">
        <section className="top-header">
          <div>
            <Phonetic phonetic={phoneticWithAudio} />
          </div>
          <h1 className="word">{props.results.word}</h1>
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section>
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
