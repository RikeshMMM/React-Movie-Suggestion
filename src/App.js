import MovieDetailsAndSuggestions from "./components/MovieDetailsAndSuggestions";
import Footer from "./components/Footer";
import { MovieProvider } from "./context/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <div className="container">
        <MovieDetailsAndSuggestions />
        <Footer />
      </div>
    </MovieProvider>
  );
};

export default App;
