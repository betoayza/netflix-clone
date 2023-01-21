import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../../components/pure/Comment";
import { useFetchMovieData } from "../../hooks/useFetchMovieData";
import { useGetComments } from "../../hooks/useGetComments";

const header1Style = {
  color: "#7b68ee",
};

const header3Style = {
  color: "#e8f48c",
};

export const MovieDescription = () => {
  const [movie, setMovie] = useState(null);

  let { slug, imdbID } = useParams();
  // console.log(slug, imdbID); //works

  let { movieData } = useFetchMovieData(imdbID);
  // console.log("Movie data: ", movieData);

  const { comments } = useGetComments(imdbID);
  // console.log("Comments: ", comments);

  useEffect(() => {
    const getMovie = async () => {
      const options = {
        headers: {         
          "trakt-api-key":
            "2f65384e8f78e76a296c8d382d90751aaa657ebd6ae035fe7ce19075d2ce5023",
          "trakt-api-version": 2,
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        timeout: 3000,
      };

      await axios
        .get(`https://api.trakt.tv/movies/${slug}`, options)
        .then((res) => {
          //console.log(res.data);
          if (res.data) {
            setMovie(res.data);
          }
        })
        .catch((error) => error);
    };
    getMovie();
  }, []);

  const handlePlay = () => {
    alert("Not working for now...");
  };

  return (
    movie && (
      <div style={{ color: "white", display: "grid", placeItems: "center" }}>
        <h1 style={header1Style}>{movie.title}</h1>
        <img
          src={movieData.Poster}
          className="img-fluid img-thumbnail"
          alt="Movie"
        />
        <button
          type="button"
          className="btn btn-outline-warning mt-2"
          onClick={handlePlay}
          style={{ fontSize: "20px" }}
        >
          <i className="bi bi-play-fill"></i>
        </button>
        <br />
        <div
          className={"text-center"}
          style={{ display: "grid", placeItems: "center" }}
        >
          <h3 style={header3Style}>Title:</h3>
          <p>{movie.title}</p>
          <h3 style={header3Style}>Genre:</h3>
          <p>{movieData.Genre}</p>
          <h3 style={header3Style}>Synopsis:</h3>
          <div className={"w-50"}>
            <p className={"text-break"}>{movieData.Plot}</p>
          </div>
          <h3 style={header3Style}>Director:</h3>
          <p>{movieData.Director}</p>
          <h3 style={header3Style}>Actors:</h3>
          <p>{movieData.Actors}</p>
          <h3 style={header3Style}>Country:</h3>
          <p>{movieData.Country}</p>
          <h3 style={header3Style}>Year:</h3>
          <p>{movieData.Year}</p>
          <h3 style={header3Style}>Awards:</h3>
          <p>{movieData.Awards}</p>
          <h3 style={header3Style}>Ratings:</h3>
          {movieData.Ratings.map((rating, index) => {
            return (
              <p key={index}>
                {rating.Source}: {rating.Value}
              </p>
            );
          })}
          <h3 style={header3Style}>Comments</h3>
          <div className={"container"} style={{ maxWidth: "100%" }}>
            {comments.length &&
              comments.map((comment, index) => {
                return <Comment key={index} comment={comment} />;
              })}
          </div>
        </div>
      </div>
    )
  );
};
