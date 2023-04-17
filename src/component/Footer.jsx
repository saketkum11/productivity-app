import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className=" flex justify-between items-center bg-slate-500 py-5 text-white px-2">
      <span>made by Saket Kumar</span>
      <ul className="flex gap-4 text-2xl">
        <li>
          <Link to="">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link>
            <FaInstagram />
          </Link>
        </li>
        <li>
          <Link>
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link>
            <FaTwitter />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export { Footer };
