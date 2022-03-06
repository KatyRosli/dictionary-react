import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-3" key={index}>
                <a
                  href={photo.src.original}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="img-fluid rounded projects"
                >
                  <img
                    src={photo.src.landscape}
                    alt="photos"
                    class="img-fluid rounded projects"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
