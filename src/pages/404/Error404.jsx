import React from "react";
import { useNavigate, useRouteError, Link } from "react-router-dom";

export const Error404 = () => {
  let navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div className={"text-center"}>
      <h1 style={{ color: "#e8f48c" }}>
        {error.status + ": " + error.statusText}
      </h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className={"btn btn-dark"} onClick={() => navigate(-1)}>
          Volver
        </button>
        <button type="button" className="btn btn-dark">
          <Link
            onClick={() => navigate(-1)}
            style={{ color: "red", textDecoration: "none" }}
          >
            Volver
          </Link>
        </button>
      </div>
    </div>
  );
};
