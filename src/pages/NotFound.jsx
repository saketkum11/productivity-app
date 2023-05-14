import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link to="/">Back to home</Link>
      <div>NotFound</div>
    </div>
  );
};

export { NotFound };
