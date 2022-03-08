import { useContext, useEffect, useReducer } from "react";
import { SearchContext } from "../context/MovieContext";
import { fetchMovieByTitle } from "../util/api";
import Details from "./Details";

const initialState = {
  loading: true,
  errorMessage: null,
  details: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_DETAILS_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null,
      };
    case "SEARCH_DETAILS_SUCCESS":
      return {
        ...state,
        loading: false,
        details: action.payload,
      };
    case "SEARCH_DETAILS_FAILURE":
      return {
        ...state,
        loading: false,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

const SearchDetails = () => {
  const [search] = useContext(SearchContext);

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let subscribed = true;

    const fetchData = async () => {
      dispatch({
        type: "SEARCH_DETAILS_REQUEST",
      });

      fetchMovieByTitle(search)
        .then((response) => response.json())
        .then((detailsJSON) => {
          if (detailsJSON.Response === "True") {
            dispatch({
              type: "SEARCH_DETAILS_SUCCESS",
              payload: detailsJSON,
            });
          } else {
            dispatch({
              type: "SEARCH_DETAILS_FAILURE",
              error: detailsJSON.Error,
            });
          }
        });
    };

    if (search && subscribed) fetchData();

    return () => (subscribed = false);
  }, [search]);

  const { details, errorMessage, loading } = state;

  return (
    <>
      {loading && !errorMessage ? (
        <span>loading...</span>
      ) : errorMessage ? (
        <div className="errorMessage">{errorMessage}</div>
      ) : (
        <Details {...details} />
      )}
    </>
  );
};

export default SearchDetails;
