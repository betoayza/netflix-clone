import React from "react";

export const Comment = ({ comment }) => {
  return (
    <div
      className={""}
      style={{
        border: "3px solid",
        borderColor: "green",
        borderRadius: "10px",
      }}
    >
      <h6 style={{ color: "#c32148" }}>@{comment.user.username}</h6>
      <p>{comment.comment}</p>
    </div>
  );
};
