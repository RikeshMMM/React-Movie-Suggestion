import { useContext, useEffect, useReducer } from "react";
import { SearchContext } from "../context/MovieContext";
import { fetchSuggestionByTitle } from "../util/api";
import Suggestions from "./Suggestions";

const initialState = {
  loading: true,
  errorMessage: null,
  suggestions: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_SUGGESTIONS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_SUGGESTIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        suggestions: action.payload,
      };
    case "SEARCH_SUGGESTIONS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const SearchSuggestions = () => {
  const [search] = useContext(SearchContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let subscribed = true;

    const fetchData = async () => {
      dispatch({
        type: "SEARCH_SUGGESTIONS_REQUEST",
      });

      fetchSuggestionByTitle(search)
        .then((response) => response.json())
        .then((suggestionsJSON) => {
          let results = suggestionsJSON.Similar.Results;
          if (results.length > 0) {
            dispatch({
              type: "SEARCH_SUGGESTIONS_SUCCESS",
              payload: results,
            });
          } else {
            dispatch({
              type: "SEARCH_SUGGESTIONS_FAILURE",
              error: "Sorry, No Suggestions Found!",
            });
          }
        });
    };

    if (search && subscribed) fetchData();

    return () => (subscribed = false);
  }, [search]);

  const { suggestions, errorMessage, loading } = state;

  return (
    <>
      {loading && !errorMessage ? (
        <span>loading...</span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        <Suggestions suggestions={suggestions} />
      )}
    </>
  );
};

export default SearchSuggestions;
