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
    <div className="section">
      <div className="suggestions">
        <h2>Suggestions:</h2>
        {suggestions.map((suggestion, index) => (
          <Suggestion
            {...suggestion}
            handleButtonClick={handleSearchBySuggestion}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Suggestions;
