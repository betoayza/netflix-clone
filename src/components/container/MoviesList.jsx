import React, { useState, useEffect } from "react";
import { Movie } from "../pure/Movie";
import axios from "axios";

export const MoviesList = ({
  searchingText,
  setSearchingText,
  setIsModalActivated,
}) => {
  const [text, setText] = useState(searchingText);
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    // console.log(e.target.value);
    setMovies([]);
    setText(e.target.value);
  };

  const handleClose = () => {
    setIsModalActivated(false);
    setSearchingText("");
    setText("");
    document.body.removeAttribute("style");
  };

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        headers: {
          "Content-Type": "application/json",
          "trakt-api-key":
            "2f65384e8f78e76a296c8d382d90751aaa657ebd6ae035fe7ce19075d2ce5023",
          "trakt-api-version": 2,
        },
        timeout: 3000,
      };

      await axios
        .get(`https://api.trakt.tv/search/movie?query=${text}`, options)
        .then((res) => {
          // console.log(res.data);
          if (res.data) {
            setMovies(res.data);
          }
        })
        .catch((error) => error);
    };
    setMovies([]);
    !text ? setMovies([]) : getMovies();
  }, [text]);

  // console.log(text);

  return (
    <div className={"vh-100"} style={{ display: "grid", placeItems: "center" }}>
      <div className={"container m-2 w-auto"}>
        <input
          className="form-control"
          type="search"
          placeholder="Search..."
          value={text}
          aria-label="Search"
          style={{
            color: "#800080",
            fontStyle: "italic",
            fontWeight: "bold",
          }}
          onChange={handleChange}
        />
        <div
          className={"mt-2"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleClose}
            style={{ borderRadius: 7 }}
          >
            <i style={{ fontSize: "20px" }} className="bi-x-circle-fill"></i>
          </button>
        </div>
      </div>

      {movies && movies.length ? (
        <div
          className={"row row-cols-auto m-2"}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {movies &&
            movies.map((movie, index) => {
              // console.log(movie);
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
