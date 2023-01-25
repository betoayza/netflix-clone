import React from "react";
import { useFetchMovieData } from "../../hooks/useFetchMovieData";

export const Movie = ({ movie }) => {
  const movieID = movie?.ids ? movie.ids.imdb : movie.imdbID;
  const { movieData } = useFetchMovieData(movieID);

  // console.log(movie);
  // console.log(movieID);
  // console.log(movieData);

  return movieData && movieData.Poster !== "N/A" && movieID && movie ? ( // movieData.Year <= 2023
    <div className={"m-1"}>
      <a
        style={{ color: "#e3ff00" }}
        href={`/movies/${movie?.ids ? movie.ids.slug : movie.Title}/${
          // hay que mandar el slug
          movieData.imdbID
        }`}
      >
        <img
          src={movieData.Poster}
          className="img-fluid img-thumbnail rounded"
          alt={`Movie`}
        />
      </a>
    </div>
  ) : null;
};
