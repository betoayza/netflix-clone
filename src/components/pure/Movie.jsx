import React from "react";
import { NavLink } from "react-router-dom";
import { useFetchMovieData } from "../../hooks/useFetchMovieData";

export const Movie = ({ movie }) => {
  const movieID = movie?.ids ? movie.ids.imdb : movie.imdbID;
  const { movieData } = useFetchMovieData(movieID);

  // console.log(movie);
  // console.log(movieID);
  // console.log(movieData);

  return movieData && movieData.Poster !== "N/A" && movieID && movie ? ( // movieData.Year <= 2023
    <div className={"m-1"}>
      <NavLink
        to={`/movies/${movie?.ids ? movie.ids.slug : movie.Title}/${
          movieData.imdbID
        }`}
        style={({ isActive }) => (isActive ? undefined : undefined)}
      >
        <img
          src={movieData.Poster}
          className="img-fluid img-thumbnail rounded"
          alt={`Movie`}
        />
      </NavLink>
    </div>
  ) : null;
};
