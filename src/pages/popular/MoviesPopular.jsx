import axios from "axios";
import React, { useState, useEffect } from "react";
import { api } from "../../api/api";
import { Movie } from "../../components/pure/Movie";

export const MoviesPopular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        headers: {
          // "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Headers": "*",
          // Accept: "application/json",
          // "Content-Type": "application/json",
          "trakt-api-key":
            "2f65384e8f78e76a296c8d382d90751aaa657ebd6ae035fe7ce19075d2ce5023",
          "trakt-api-version": 2,
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        timeout: 3000,
      };

      await axios
        .get(`${api}/movies/popular`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setMovies(res.data);
          }
        })
        .catch((error) => error);
    };
    getMovies();
  }, []);

  return (
    <div className={"container text-center"}>
      <h2 style={{ color: "#e8f48c" }}>Popular</h2>
      <div
        className={"row row-cols-auto p-2 border"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {movies.length ? (
          movies.map((movie, index) => {
            return <Movie key={index} movie={movie} />;
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
