import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchMovieData = (imdbID) => {
  const [movie, setMovie] = useState(null);
  console.log(imdbID);

  useEffect(() => {
    const getMovieData = async () => {
      const options = {
        timeout: 3000,
      };

      await axios
        .get(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a08dcb`, options)
        .then((res) => {
          // console.log(res.data);
          if (res.data) {
            setMovie(res.data);
          }
        })
        .catch((error) => error);
    };
    getMovieData();
  }, []);

  return movie && movie;
};
