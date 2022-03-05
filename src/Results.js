import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h1 className="word">{props.results.word}</h1>
          {props.results.phonetics.map(function (phonetic, index) {
            if (phonetic.audio) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            }
          })}
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
