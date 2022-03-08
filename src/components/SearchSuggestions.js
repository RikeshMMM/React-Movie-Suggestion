import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../context/MovieContext";
import { searchSuggestionByTitle } from "../util/api";
import Suggestions from "./Suggestions";

const SearchSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [search] = useContext(SearchContext);

  useEffect(() => {
    let subscribed = true;

    const fetchData = async () => {
      const suggestionsJSON = await (
        await searchSuggestionByTitle(search)
      ).json();
      setSuggestions(suggestionsJSON.Similar.Results);
      console.log(suggestionsJSON.Similar.Results);
    };

    if (search && subscribed) fetchData();

    return () => (subscribed = false);
  }, [search, setSuggestions]);

  return (
    <>
      {suggestions.length > 0 && <Suggestions suggestions={suggestions} />}
    </>
  );
};

export default SearchSuggestions;
