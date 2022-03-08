import { useState, useContext, useEffect } from "react";
import { SearchContext } from "../context/MovieContext";
import { searchMovieByTitle } from "../util/api";
import Details from "./Details";

const SearchDetails = () => {
  const [details, setDetails] = useState();
  const [search] = useContext(SearchContext);

  useEffect(() => {
    let subscribed = true;

    const fetchData = async () => {
      const detailsJSON = await (await searchMovieByTitle(search)).json();
      setDetails(detailsJSON);
      console.log(detailsJSON);
    };

    if (search && subscribed) fetchData();

    return () => (subscribed = false);
  }, [search, setDetails]);

  return <>{details && <Details {...details} />}</>;
};

export default SearchDetails;
