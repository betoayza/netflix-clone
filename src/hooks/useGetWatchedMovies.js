import { useState, useEffect } from "react";
import axios from "axios";

export const useGetWatchedMovies = () => {
  const [watchedMovies, setWatchedMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
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
        .get(`https://api.trakt.tv/movies/watched/weekly`, options)
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
