import React, { useState, useEffect } from "react";
import { Loader } from "../../components/pure/Loader";
import { Movie } from "../../components/pure/Movie";
import { useGetWatchedMovies } from "../../hooks/useGetWatchedMovies";

export const MoviesWatched = () => {
  const [loader, setLoader] = useState(true);
  const { watchedMovies } = useGetWatchedMovies();
  // console.log(watchedMovies);

  useEffect(() => { 
    watchedMovies.length && setLoader(false);
  }, [watchedMovies]);

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
