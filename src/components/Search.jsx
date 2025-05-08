import React from "react";
import searchImg from "../../public/search.svg";

const Search = ({ searchTerm, setSearchTerm }) => {
  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }
  return (
    <div className="search">
      <div>
        <img src={searchImg} alt="search image" />
        <input
          type="text"
          placeholder="Search through thounsands of movies"
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
