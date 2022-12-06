import React from "react";
import coverImage from "../img/portada-netflix-clone.jpg";

export const Header = () => {
  return (
    <div>
      <img
        src={coverImage}
        className="img-fluid rounded-top"
        alt="Cover image"
      />
    </div>
  );
};
