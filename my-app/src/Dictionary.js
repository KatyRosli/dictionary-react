import React from "react";
import "./Dictionary.css";

export default function Dictionary() {
  return (
    <div className="Dictionary">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search for a city..."
          autoFocus="on"
          aria-label="Search"
        />
        <button type="submit" value="Search" className="btn btn-warning">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}
