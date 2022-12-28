import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchMovieData } from "../../hooks/useFetchMovieData";

export const MovieDescription = () => {
  const [movie, setMovie] = useState(null);
  let { slug, poster } = useParams();
  const movieData = useFetchMovieData(movie ? movie.ids.imdb : null);
  console.log(movieData);

  useEffect(() => {
    const getMovie = async () => {
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
        .get(`https://api.trakt.tv/movies/${slug}`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setMovie(res.data);
          }
        })
        .catch((error) => error);
    };
    getMovie();
  }, []);

  return (
    movie && (
      <div style={{ color: "white" }}>
        {/* <img src={poster} className="img-fluid rounded-top" alt="Movie" /> */}
        <h3>Title:</h3>
        <p>{movie.title}</p>
        <h3>Synopsis:</h3>
        <p>{movie.plot}</p>
        <h3>Director:</h3>
        <p>{movie.Director}</p>
        <h3>Actors:</h3>
        <p>{movie.Actors}</p>
        <h3>Country:</h3>
        <p>{movie.Country}</p>
        <h3>Year:</h3>
        <p>{movie.year}</p>
      </div>
    )
  );
};
