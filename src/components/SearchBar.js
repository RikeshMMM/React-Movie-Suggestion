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
    <div className="container">
      <div className="search-bar">
        <form autoComplete="off">
          <div className="input-group">
            <img src="search.svg" alt="Search Icon" width={25} height={25} />
            <input
              type="text"
              id="search-term"
              placeholder="Search Movie"
              value={input}
              onChange={handleUserInput}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearchButton(event);
                }
              }}
            />
            <button onClick={handleSearchButton}>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
