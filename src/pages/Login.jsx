import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTitle } from "../server";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const { loginUser, error } = useAuth();
  const { email, password } = userLogin;
  useTitle("Login");
  const handleChange = (event) => {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value });
  };
  const handleLogin = ({ email, password }) => {
    loginUser({ email, password });
  };
  const handleGuestLogin = ({ guestEmail, guestPassword }) => {
    setUserLogin((currentuser) => {
      return {
        ...currentuser,
        email: guestEmail,
        password: guestPassword,
      };
    });
    loginUser({ guestEmail, guestPassword });
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        {error && <div className="bg-red-400 px-4 py-4">{error}</div>}

        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin({ email, password });
          }}
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={(event) => handleChange(event)}
                id="email-address"
                name="email"
                type="email"
                value={email}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={(event) => handleChange(event)}
                id="password"
                name="password"
                type="password"
                required
                value={password}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-3"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-cyan-500 group-hover:text-cyan-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
            <button
              onClick={() =>
                handleGuestLogin({
                  guestEmail: "test@gmail.com",
                  guestPassword: 123456789,
                })
              }
              className="group relative w-full flex justify-center py-2 px-4  text-sm font-medium rounded-md border-cyan-600 border-2 text-cyan-600 hover:bg-cyan-600 hover:text-white mb-3"
            >
              Sign as guest
            </button>
            <Link
              to="/signup"
              className="border-gray-400 group relative w-full flex justify-center py-2 px-4 border  text-sm font-medium rounded-md text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 "
            >
              Don't Have Account ?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export { Login };
