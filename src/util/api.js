const corsProxy = "https://whispering-sea-36707.herokuapp.com/";

const omdbBaseURL = "http://www.omdbapi.com/";
const omdbKey = "8991f3e6";

const tastedriveBaseURL = "http://tastedive.com/api/similar";
const tastedriveKey = "307187-WebProgr-7T4FOZI5";

export const fetchMovieByTitle = (title) => {
  return fetch(`${corsProxy}${omdbBaseURL}?apikey=${omdbKey}&t=${title}`);
};

export const fetchSuggestionByTitle = (title, type = "movie") => {
  return fetch(
    `${corsProxy}${tastedriveBaseURL}?q=${title}&type=${type}&limit=5&k=${tastedriveKey}`
  );
};
