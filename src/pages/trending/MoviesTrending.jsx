import axios from "axios";
import React, { useState, useEffect } from "react";
import { Loader } from "../../components/pure/Loader";
import { Movie } from "../../components/pure/Movie";

export const MoviesTrending = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        headers: {     
          "trakt-api-key": `${import.meta.env.VITE_API_KEY}`,
          "trakt-api-version": 2,
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        timeout: 3000,
      };

      await axios
        .get(`${import.meta.env.VITE_API}/movies/trending`, options)
        .then((res) => {
          // console.log(res.data);
          if (res.data) {
            setMovies(res.data);
            setLoader(false);
          }
        })
        .catch((error) => error);
    };
    getMovies();
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className={"container text-center"}>
      <h2 style={{ color: "#e8f48c" }}>Trending</h2>
      <div
        className={"row row-cols-auto p-2"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {movies.length ? (
          movies.map((movie, index) => {
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
