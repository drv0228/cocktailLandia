import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          className="search-bar__input"
          placeholder="Search for more..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="search__button"></button>
      </div>
    );
  };
  
  export default SearchBar;