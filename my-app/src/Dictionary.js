import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} defination`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form className="form-inline">
        <input
          onSubmit={search}
          className="form-control"
          type="search"
          placeholder="Search for a word..."
          autoFocus="on"
          aria-label="Search"
          onChange={handleKeywordChange}
        />
        <button type="submit" value="Search" className="btn btn-warning">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}