import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="max-w-[440px] w-full flex items-center">
      <ul className="w-full text-[#74768F] items-center flex justify-between">
        <li>
          <Link to={"/about-us"}>About Us</Link>
        </li>
        <li>
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li>
          <Link to={"/impact"}>Impact</Link>
        </li>
        <li>
          <Link to={"/location"}>Location</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
