import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav>
        <Link to="task">
          <h2 className="text-4xl font-bold text-cyan-500 cursor-pointer">
            PomoDoro
          </h2>
        </Link>
      </nav>
    </div>
  );
};

export { Nav };
