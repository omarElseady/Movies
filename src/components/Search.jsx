import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="searchicon.png" alt="search icon" />
        <input
          type="text"
          placeholder="Search through thousand of movies"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default Search;
