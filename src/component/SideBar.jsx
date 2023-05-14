import React from "react";
import { Link } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { MdAddTask } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
const SideBar = () => {
  const { isLoggedIn, logoutUser } = useAuth();
  return (
    <div className="flex flex-col  gap-5 mt-9 ">
      <Link to="task">
        <h2 className="text-4xl font-bold text-cyan-500 cursor-pointer">
          PomoDoro
        </h2>
      </Link>
      <nav className="mt-8 text-md">
        <ul className="flex flex-col gap-9">
          <li className="hover:bg-cyan-200 hover:text-white py-4 px-2 hover:rounded-md focus:text-cyan-400">
            <Link className="flex items-center gap-4" to="/">
              <span className="text-4xl">
                <MdAddTask />
              </span>
              <span>Tasks</span>
            </Link>
          </li>
          <li className="hover:bg-cyan-200 hover:text-white py-4 px-2 hover:rounded-md focus:text-cyan-400">
            <Link className="flex items-center gap-4" to="setting">
              <span className="text-4xl">
                <FiSettings />
              </span>
              <span>Setting</span>
            </Link>
          </li>
          <li className="hover:bg-cyan-200 hover:text-white py-4 px-2 hover:rounded-md focus:text-cyan-400">
            {isLoggedIn ? (
              <Link
                className="flex items-center gap-4"
                onClick={() => {
                  logoutUser();
                }}
              >
                <span className="text-4xl">
                  <RxAvatar />
                </span>
                <span> Logout</span>
              </Link>
            ) : (
              <Link className="flex items-center gap-4" to="login">
                <span className="text-4xl">
                  <RxAvatar />
                </span>
                <span>Login</span>
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export { SideBar };
