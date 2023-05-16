import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center gap-3 items-center min-h-screen">
      <div className="underline underline-offset-1">
        <Link to="/">Back to Home</Link>
      </div>
      <div>NotFound</div>
    </div>
  );
};

export { NotFound };
