import axios from "axios";
import { useState, useEffect } from "react";

export const useGetComments = (imdbID, sort = "newest") => {
  const [comments, setComments] = useState("");

  useEffect(() => {
    const getComments = async () => {
      const url = `${import.meta.env.VITE_API}/movies/${imdbID}/comments/${sort}`;

      const options = {
        headers: {
          "trakt-api-key":
            `${import.meta.env.VITE_API_KEY}`,
          "trakt-api-version": 2,
          Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        },
        timetout: 3000,
      };

      await axios
        .get(url, options)
        .then((res) => {
          // console.log(res);
          setComments(res.data);
        })
        .catch((error) => console.error(error));
    };

    getComments();
  }, []);

  return { comments };
};
