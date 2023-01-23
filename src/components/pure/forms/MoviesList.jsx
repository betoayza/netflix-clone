import React from "react";
import { useGetMovies } from "../../../hooks/useGetMovies";
import { Movie } from "../Movie";

export const MoviesList = ({ title }) => {
  let { movies } = useGetMovies(title);
  console.log(title);
  console.log(movies);

  return (
    <div
      className={"border"}
      style={{ display: "grid", placeItems: "center" }}
    >
      {movies.length ? (
        <div
          className={"row row-cols-auto m-2"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {movies.map((movie, index) => {
            console.log(movie);
            return <Movie key={index} movie={movie.movie} />;
          })}
        </div>
      ) : (
        <div>
          <h3 className={"text-center"} style={{ color: "#ff7f50" }}>
            No movies :(
          </h3>
        </div>
      )}
    </div>
  );
};
