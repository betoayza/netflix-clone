import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchMovieData = (imdbID) => {
  const [movieData, setMovieData] = useState(null);
  // console.log(imdbID); //works

  useEffect(() => {
    const getMovieData = async () => {      
      const options = {
        timeout: 3000,
      };

      await axios
        .get(`${import.meta.env.VITE_API_OMDBAPI}/?i=${imdbID}&apikey=4a08dcb`, options)
        .then((res) => {
          // console.log(res.data);
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
