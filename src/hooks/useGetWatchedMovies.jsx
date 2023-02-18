import { useState, useEffect } from "react";
import axios from "axios";

export const useGetWatchedMovies = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
        headers: {
          "trakt-api-key":
            `${import.meta.env.VITE_API_KEY}`,
          "trakt-api-version": 2,
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        timeout: 3000,
      };

      await axios
        .get(`${import.meta.env.VITE_API}/movies/watched/weekly`, options)
        .then((res) => {
          // console.log(res.data);
          if (res.data) {
            setWatchedMovies(res.data);
          }
        })
        .catch((error) => error);
    };
    getMovies();
  }, []);
  return { watchedMovies };
};
