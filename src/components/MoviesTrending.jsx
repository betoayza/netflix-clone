import axios from "axios";
import React, { useState, useEffect } from "react";
import { Film } from "./Film";

export const MoviesTrending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        headers: {
          // "Content-Type": "application/json",
          // "Access-Control-filmsow-Origin": "*",
          // "Access-Control-filmsow-Headers": "*",
          // Accept: "application/json",
          "trakt-api-key":
            "2f65384e8f78e76a296c8d382d90751aaa657ebd6ae035fe7ce19075d2ce5023",
          "trakt-api-version": "2",
          Authorization: `Bearer ${import.meta.env.ACCESS_TOKEN}`,
        },
        timeout: 3000,
      };

      await axios
        .get(`https://api.trakt.tv/movies/trending`, options)
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
      <h2 style={{ color: "#e8f48c" }}>Trending</h2>
      <div
        className={"row row-cols-auto p-2 border"}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {movies.length ? (
          movies.map((film, index) => {
            return <Film key={index} film={film} />;
          })
        ) : (
          <div className={"text-center w-100"}>
            <h3>No films :(</h3>
          </div>
        )}
      </div>
    </div>
  );
};
