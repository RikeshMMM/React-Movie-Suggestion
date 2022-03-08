import { useContext } from "react";
import { SearchContext } from "../context/MovieContext";
import Suggestion from "./Suggestion";

const Suggestions = ({ suggestions }) => {
  const [, setSearch] = useContext(SearchContext);

  const handleSearchBySuggestion = (event) => {
    event.preventDefault();
    const value = event.target.value.trim();
    setSearch(value);
  };

  return (
    <div className="suggestions">
      {suggestions.map((suggestion, index) => (
        <Suggestion key={index} {...suggestion} handleButtonClick={handleSearchBySuggestion}/>
      ))}
    </div>
  );
};

export default Suggestions;
