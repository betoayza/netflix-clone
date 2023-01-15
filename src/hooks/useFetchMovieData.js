import React, { useState, useEffect } from "react";
import axios from "axios";

export const useFetchMovieData = (imdbID) => {
  const [movieData, setMovieData] = useState(null);
  console.log(imdbID); //works

  useEffect(() => {
    const getMovieData = async () => {
      // headers: {
      //   "Content-Type": "application/json",
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allsow-Headers": "*",
      //   Accept: "application/json",
      // },
      const options = {
        timeout: 3000,
      };

      await axios
        .get(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a08dcb`, options)
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            setMovieData(res.data);
          }
        })
        .catch((error) => error);
    };
    getMovieData();
  }, []);

  return { movieData };
};
