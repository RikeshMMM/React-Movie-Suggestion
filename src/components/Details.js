const Details = ({
  Poster,
  Title,
  imdbID,
  Released,
  Plot,
  imdbRating,
  Rated,
  Runtime,
  Actors,
  Writer,
  Director,
  Awards,
  Language,
}) => {
  return (
    <div className="section">
      <div className="details">
        <div className="details__poster">
          <img src={Poster} alt={Title} />
        </div>
        <div className="details__header">
          <div>
            <h1>{Title}</h1>
            <span className="text--color-light-blue">IMDB ID: {imdbID}</span>
          </div>
          <div>Released on {Released}</div>
        </div>
        <div className="details__plot">
          <p>{Plot}</p>
        </div>
        <div className="details__stats">
          <div className="details__stats__item">
            <span>IMDB Rating</span>
            <span className="text--weight-bold">{imdbRating}</span>
          </div>
          <div className="details__stats__item">
            <span>PG Rated</span>
            <span className="text--weight-bold">{Rated}</span>
          </div>
          <div className="details__stats__item">
            <span>Runtime</span>
            <span className="text--weight-bold">{Runtime}</span>
          </div>
        </div>
        <div className="details__additional">
          <div className="details__additional__item">
            <img src="movie-roll.svg" alt="Movie Roll" width={25} height={25} />
            <span>Starring {Actors}</span>
          </div>
          <div className="details__additional__item">
            <img
              src="director.svg"
              alt="Director Icon"
              width={25}
              height={25}
            />
            <span>
              Written by {Writer} &amp; Directed by {Director}
            </span>
          </div>
          <div className="details__additional__item">
            <img src="star.svg" alt="Awards Icon" width={25} height={25} />
            <span>{Awards}</span>
          </div>
          <div className="details__additional__item">
            <img src="globe.svg" alt="Language Icon" width={25} height={25} />
            <span>Languages available in {Language}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
