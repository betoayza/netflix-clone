import { useState, useEffect } from "react";
import axios from "axios";

export const useGetMovies = (text) => {
  const [movies, setMovies] = useState([]);
  console.log(text);

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
          console.log(res.data);
          if (res.data) {
            setMovies(res.data);
          }
        })
        .catch((error) => error);
    };
    getMovies();
  }, []);

  return { movies };
};
