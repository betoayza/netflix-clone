import { useState, useEffect } from "react";
import axios from "axios";

export const useGetMoviesData = (arrIDs = []) => {
  const [moviesData, setMoviesData] = useState([]);
  console.log("asd: ", arrIDs);

  let arrPromises = arrIDs.map((id) => {
    let url = `http://www.omdbapi.com/?i=${id}&apikey=4a08dcb`;
    return axios.get(url);
  });

  console.log("uhuf: ", arrPromises);

  axios
    .all(arrPromises)
    .then((responses) => {
      console.log(responses);
      setMoviesData(responses);
    })
    .catch((error) => {
      console.error(error);
    });

  return moviesData;
};
