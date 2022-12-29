import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useFetchMovieData } from "../../hooks/useFetchMovieData";


export const Movie = ({ movie }) => {
  // const [poster, setPoster] = useState({});
  console.log(movie);
  const movieData = useFetchMovieData(movie.ids.imdb);

  console.log(movieData);
  // setPoster(posterData);

  // useEffect(() => {
  //   const getPoster = async () => {
  //     const options = {
  //       headers: {
  //         // "Content-Type": "application/json",
  //         // "Access-Control-filmsow-Origin": "*",
  //         // "Access-Control-filmsow-Headers": "*",
  //         // Accept: "application/json",
  //       },
  //       timeout: 3000,
  //     };

  //     await axios
  //       .get(
  //         `http://www.omdbapi.com/?i=${movie.ids.imdb}&apikey=4a08dcb`,
  //         options
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         if (res.data) {
  //           setPoster(res.data.Poster);
  //         }
  //       })
  //       .catch((error) => error);
  //   };
  //   getPoster();
  // }, []);

  return (
    movieData && (
      <div className={"m-1"}>
        <NavLink to={`/movies/${movie.ids.slug}/${movieData.imdbID}`}>
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
