import MovieDetailsAndSuggestions from "./components/MovieDetailsAndSuggestions";
import { MovieProvider } from "./context/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <MovieDetailsAndSuggestions />
    </MovieProvider>
  );
};

export default App;
