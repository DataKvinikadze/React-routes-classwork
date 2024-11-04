import React from "react";
import { Link } from "react-router-dom";

import Navbar from "./navBar";
import Logo from "/Logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <div className="max-w-[1460px] px-[24px] w-full flex justify-between mx-auto bg-[#FBFBFB] border-b-[2px]">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <Navbar />
        <div className="flex gap-x-[16px] items-center">
          <Button
            classname={
              "px-[24px] py-[16px] rounded-[8px] bg-[#0A157A] text-[#FFFFFF]"
            }
            name={"Sign In"}
          />
          <Button
            classname={
              "px-[24px] py-[16px] rounded-[8px] bg-[#FFFFFF] text-[#0A157A] border-[1px] border-[#0A157A]"
            }
            name={"Sign Up"}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
