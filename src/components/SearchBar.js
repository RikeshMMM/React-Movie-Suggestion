import { useState, useContext } from "react";
import { SearchContext } from "../context/MovieContext";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [, setSearch] = useContext(SearchContext);

  const clearUserInput = () => {
    setInput("");
  };

  const handleUserInput = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const handleSearchButton = (event) => {
    event.preventDefault();
    const value = input.trim();
    setSearch(value);
    clearUserInput();
  };

  return (
    <div className="search">
      <input
        type="text"
        id="search-term"
        value={input}
        onChange={handleUserInput}
      />
      <button onClick={handleSearchButton}>Search</button>
    </div>
  );
};

export default SearchBar;
