import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFetchMovieData } from "../../hooks/useFetchMovieData";

export const Movie = ({ movie }) => {  
  console.log(movie);
  const movieID = movie?.ids ? movie.ids.imdb : movie.imdbID;

  const { movieData } = useFetchMovieData(movieID);

  console.log(movieData);  

  return (
    movieData && (
      <div className={"m-1"}>
        <NavLink
          to={`/movies/${movie?.ids ? movie.ids.slug : movie.Title}/${
            // hay que cambiar Title por el slug de alguna forma
            movieData.imdbID
          }`}
        >
          {({ isActive }) => (
            <a
              className={isActive ? "nav-link" : "nav-link"}
              style={{ color: "#e3ff00" }}
            >
              <img
                src={movieData.Poster}
                className="img-fluid img-thumbnail rounded"
                alt="Movie"
              />
            </a>
          )}
        </NavLink>
      </div>
    )
  );
};
