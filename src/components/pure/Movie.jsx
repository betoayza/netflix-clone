import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFetchMovieData } from "../../hooks/useFetchMovieData";

export const Movie = ({ movie }) => {
  const movieID = movie?.ids ? movie.ids.imdb : movie.imdbID;
  const { movieData } = useFetchMovieData(movieID);

  return (
    movieData && (
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
            alt="Movie"
          />
        </a>
      </div>
    )
  );
};
