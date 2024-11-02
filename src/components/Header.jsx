import React from "react";
import Navbar from "./navBar";
import Logo from "/Logo.svg";
import Button from "./Button";

const Header = () => {
  return (
    <>
      <div>
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <Navbar />
        <div className="flex gap-4">
          <Button name={"Sign In"} />
          <Button name={"Sign Up"} />
        </div>
      </div>
    </>
  );
};

export default Header;
