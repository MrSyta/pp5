import React, { useState, useEffect } from "react";
import axios from "axios";
import Bookshop from "./Bookshop";

function Search() {
  const [inputValue, setInputValue] = useState("");

  const [booksCatalogue, setBooksCatalogue] = useState([]);

  const response = () => {
    axios
      .get("http://127.0.0.1:8000/books/?format=json&title=" + inputValue)
      .then(res => {
        setBooksCatalogue(res.data);
      });
  };

  const handleSubmit = () => {
    response();
    console.log(booksCatalogue);
  };

  useEffect(() => {
    response();
    console.log(booksCatalogue);
  }, []);
  // console.log("catalog", booksCatalogue);
  return (
    <div className="Search">
      <form className="form-inline active-cyan-3 active-cyan-4">
        <i
          style={searchBarStyle}
          className="fas fa-search"
          aria-hidden="true"
        ></i>
        <input
          value={inputValue}
          onInput={s => setInputValue(s.target.value)}
          onChange={handleSubmit}
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
      <div className="Bookshop">
        {" "}
        {booksCatalogue.length && <Bookshop books={booksCatalogue} />}
      </div>
    </div>
  );
}

export default Search;

const searchBarStyle = {
  marginLeft: "10%",
  marginRight: "1%",
  display: "inline"
};
