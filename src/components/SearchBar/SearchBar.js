import React, { useState } from "react";
import "./SearchBar.scss";
import { Link } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");
  
    const handleSearch = () => {
      onSearch(query);
    };
  
    return (
      <div className="search-bar">
        <input
          type="text"
          className={`search-bar__input ${query ? 'valid' : ''}`}
          placeholder="Search for more based on your ingredients..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Link to={`/cocktails`} className="link__cocktails"><button onClick={handleSearch} className="search__button"></button></ Link>
      </div>
    );
  };
  
  export default SearchBar;