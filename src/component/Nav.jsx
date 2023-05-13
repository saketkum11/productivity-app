import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { MdAddTask } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { RxAvatar, RxCross1 } from "react-icons/rx";
const Nav = () => {
  const [navFlag, setNavFlag] = useState(false);
  const { isLoggedIn, logoutUser } = useAuth();

  const handleNavFlag = () => {
    setNavFlag((flag) => !flag);
  };
  return (
    <div className="fixed bg-white p-6 md:hidden top-0 left-0 right-0 border-b-2">
      <nav>
        <div className="flex items-center justify-between ">
          <Link to="task">
            <h2 className="text-4xl font-bold text-cyan-500 cursor-pointer">
              PomoDoro
            </h2>
          </Link>
          {navFlag ? (
            <button
              className="text-3xl p-4 rounded-md focus:border-4"
              onClick={() => handleNavFlag()}
            >
              <RxCross1 />
            </button>
          ) : (
            <button
              className="text-3xl p-4 rounded-md focus:border-4"
              onClick={() => handleNavFlag()}
            >
              <FaBars />
            </button>
          )}
        </div>
        <div>
          {navFlag && (
            <ul className="flex flex-col gap-9 mt-14">
              <li className="hover:bg-cyan-200 hover:text-white py-4 px-2 hover:rounded-md focus:text-cyan-400">
                <Link className="flex items-center gap-4" to="task">
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
          )}
        </div>
      </nav>
    </div>
  );
};

export { Nav };
