import { useContext } from "react";
import { SearchContext } from "../context/MovieContext";
import SearchBar from "./SearchBar";
import SearchDetails from "./SearchDetails";
import SearchSuggestions from "./SearchSuggestions";

const MovieDetailsAndSuggestions = () => {
  const [search] = useContext(SearchContext);
  return (
    <>
      <h1>Movie Details And Suggestions</h1>
      <SearchBar />
      {search && <SearchDetails />}
      {search && <SearchSuggestions />}
    </>
  );
};

export default MovieDetailsAndSuggestions;
