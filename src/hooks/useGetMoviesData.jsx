import { useState } from "react";
import axios from "axios";

export const useGetMoviesData = (arrIDs = []) => {
  const [moviesData, setMoviesData] = useState([]);
  // console.log("asd: ", arrIDs);

  let arrPromises = arrIDs.map((id) => {
    let url = `${import.meta.env.VITE_API_OMDBAPI}/?i=${id}&apikey=${
      import.meta.env.VITE_API_KEY_OMDBAPI
    }`;
    return axios.get(url);
  });

  // console.log("uhuf: ", arrPromises);

  axios
    .all(arrPromises)
    .then((responses) => {
      // console.log(responses);
      setMoviesData(responses);
    })
    .catch((error) => {
      console.error(error);
    });

  return moviesData;
};
