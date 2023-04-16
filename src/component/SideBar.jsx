import React from "react";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="grid gap-5 mt-9 ">
      <Link to="/">
        <h2 className="text-4xl font-bold text-cyan-500 cursor-pointer">
          Pomo
        </h2>
      </Link>
      <nav className="mt-8 text-xl">
        <ul className="flex gap-12 flex-col">
          <li>Timer</li>
          <li>Tasks</li>
          <li>Setting</li>
          <li>Login</li>
        </ul>
      </nav>
    </div>
  );
};

export { SideBar };
