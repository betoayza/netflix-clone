import React from "react";

export const Comment = ({ comment }) => {
  return (
    <div>
      <h6 style={{ color: "#c32148" }}>@{comment.user.username}</h6>
      <p>{comment.comment}</p>
    </div>
  );
};
