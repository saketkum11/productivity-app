import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Link to="task">Back to home</Link>
      <div>NotFound</div>
    </div>
  );
};

export { NotFound };
