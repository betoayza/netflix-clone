import React, { useState, useEffect } from "react";
import { Loader } from "../../components/pure/Loader";
import { Movie } from "../../components/pure/Movie";
import { useGetMoviesData } from "../../hooks/useGetMoviesData";
import { useGetWatchedMovies } from "../../hooks/useGetWatchedMovies";

export const MoviesWatched = () => {
  const [loader, setLoader] = useState(true);
  const [moviesData, setMoviesData] = useState([]);
  const { watchedMovies } = useGetWatchedMovies();
  // let arrMoviesIDs = [];
  let moviesDataAux = [];

  console.log(watchedMovies);

  useEffect(() => {
    setMoviesData(moviesDataAux);
    setLoader(false);
  }, [moviesDataAux]);

  // if (watchedMovies.length) {
  //   arrMoviesIDs = watchedMovies.map((movie) => {
  //     return movie.movie.ids.imdb;
  //   });

  //   console.log(arrMoviesIDs);
  // }

  // moviesDataAux = useGetMoviesData(arrMoviesIDs);

  // console.log(moviesData);

  return loader ? (
    <Loader />
  ) : (
    <div className={"container text-center"}>
      <h2 style={{ color: "#e8f48c" }}>Watched</h2>
      <div
        className={"row row-cols-auto p-2"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {watchedMovies.length ? (
          watchedMovies.map((movie, index) => {
            return <Movie key={index} movie={movie.movie} />;
          })
        ) : (
          <div className={"text-center w-100"} style={{ color: "white" }}>
            <h3>No films :(</h3>
          </div>
        )}
      </div>
    </div>
  );
};
