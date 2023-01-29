import React from "react";
import coverImage from "../../img/portada-netflix-clone.jpg";
//"img/portada-netflix-clone.jpg";

export const Header = () => {
  return (
    <div className={"text-center"} style={{ color: "#e8f48c" }}>
      <h1>Netflix Clone</h1>
      <img
        src={coverImage}
        className="img-fluid img-thumbnail rounded mb-2"
        alt="Cover image"
      />
    </div>
  );
};
