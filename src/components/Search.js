import { useState, useContext } from "react";
import { SearchContext } from "../context/MovieContext";

const Search = () => {
  const [input, setInput] = useState("");
  const [search, setSearch] = useContext(SearchContext);

  const handleUserInput = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const handleSearchButton = (event) => {
    event.preventDefault();
    const value = input.trim();
    setSearch(value);
    console.log("Click")
  };

  return (
    <div className="search">
      <input
        type="text"
        id="search-term"
        value={search ? search : input}
        onChange={handleUserInput}
      />
      <button onClick={handleSearchButton}>Search</button>
    </div>
  );
};

export default Search;
