import axios from "axios";
import { useState, useEffect } from "react";

export const useGetComments = (imdbID, sort = "newest") => {
  const [comments, setComments] = useState("");

  useEffect(() => {
    const getComments = async () => {
      const url = `https://api.trakt.tv/movies/${imdbID}/comments/${sort}`;

      const options = {
        headers: {
          "trakt-api-key":
            "2f65384e8f78e76a296c8d382d90751aaa657ebd6ae035fe7ce19075d2ce5023",
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
