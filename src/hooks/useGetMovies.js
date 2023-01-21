import { useState, useEffect } from "react";
import axios from "axios";

export const useGetMovies = ({ text }) => {
  const [movies, setMovies] = useState([]);
  console.log(text);

  useEffect(() => {
    const getMovies = async () => {
      const options = {
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

  return movies;
};
