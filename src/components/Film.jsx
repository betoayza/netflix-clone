import axios from "axios";
import React, { useEffect, useState } from "react";

export const Film = ({ film }) => {
  const [poster, setPoster] = useState(null);
  console.log(film.movie.ids.imdb);

  useEffect(() => {
    const getPoster = async () => {
      const options = {
        headers: {
          // "Content-Type": "application/json",
          // "Access-Control-filmsow-Origin": "*",
          // "Access-Control-filmsow-Headers": "*",
          // Accept: "application/json",
        },
        timeout: 3000,
      };

      await axios
        .get(
          `http://www.omdbapi.com/?i=${film.movie.ids.imdb}&apikey=4a08dcb`,
          options
        )
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setPoster(res.data.Poster);
          }
        })
        .catch((error) => error);
    };
    getPoster();
  }, []);

  return (
    <div className={"m-1"}>
      <img src={poster} className="img-fluid rounded" alt="Film" />
    </div>
  );
};
