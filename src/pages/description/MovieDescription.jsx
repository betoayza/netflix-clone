import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchMovieData } from "../../hooks/useFetchMovieData";

export const MovieDescription = () => {
  const [movie, setMovie] = useState(null);
  // const [movieData, setMovieData] = useState(null);
  let { slug, imdbID } = useParams();
  console.log(slug, imdbID); //works
  let movieData = useFetchMovieData(imdbID);
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
          "trakt-api-version": 2,
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
            console.log(movieData);
          }
        })
        .catch((error) => error);
    };
    getMovie();
  }, []);

  return (
    movie && (
      <div style={{ color: "white", display: "grid", placeItems: "center" }}>
        <img
          src={movieData.Poster}
          className="img-fluid img-thumbnail"
          alt="Movie"
        />
        <br />
        <div
          className={"border text-center"}
          style={{ display: "grid", placeItems: "center" }}
        >
          <h3>Title:</h3>
          <p>{movie.title}</p>
          <h3>Genre:</h3>
          <p>{movieData.Genre}</p>
          <h3>Synopsis:</h3>
          <div className={"w-50"}>
            <p className={"text-break"}>{movieData.Plot}</p>
          </div>
          <h3>Director:</h3>
          <p>{movieData.Director}</p>
          <h3>Actors:</h3>
          <p>{movieData.Actors}</p>
          <h3>Country:</h3>
          <p>{movieData.Country}</p>
          <h3>Year:</h3>
          <p>{movieData.Year}</p>
          <h3>Awards:</h3>
          <p>{movieData.Awards}</p>
          <h3>Ratings:</h3>
          {movieData.Ratings.map((rating, index) => {
            return (
              <p key={index}>
                {rating.Source}: {rating.Value}
              </p>
            );
          })}
        </div>
      </div>
    )
  );
};
