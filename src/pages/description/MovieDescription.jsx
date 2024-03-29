import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comment } from "../../components/pure/Comment";
import { Modal } from "../../components/pure/Modal";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          "trakt-api-key": `${import.meta.env.VITE_API_KEY}`,
          "trakt-api-version": 2,
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        timeout: 3000,
      };

      await axios
        .get(`${import.meta.env.VITE_API}/movies/${slug}`, options)
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
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return isModalOpen ? (
    <Modal>
      <div
        className={"text-center"}
        style={{ display: "grid", placeItems: "center" }}
      >
        <h3 style={{ color: "#ff7f50" }}>
          You must subscribe for watch this ;)
        </h3>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleClose}
          style={{ borderRadius: 7 }}
        >
          <i style={{ fontSize: "20px" }} className="bi-x-circle-fill"></i>
        </button>
      </div>
    </Modal>
  ) : (
    movie && (
      <div style={{ color: "white", display: "grid", placeItems: "center" }}>
        <h1 style={header1Style} className={"text-center"}>
          {movie.title}
        </h1>
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
