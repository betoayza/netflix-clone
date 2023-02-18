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
          "trakt-api-key": `${import.meta.env.VITE_API_KEY}`,
          "trakt-api-version": 2,
        },
        timeout: 3000,
      };

      await axios
        .get(`${import.meta.env.VITE_API}/search/movie?query=${text}`, options)
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
