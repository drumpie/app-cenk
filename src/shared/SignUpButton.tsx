import React from "react";
import { Link } from "react-router-dom";

const SignUpButton: React.FC = () => {
  return (
    <>
      <Link
        to="/sign-up"
        className="text-black font-montserrat rounded-md 
            bg-primary-500 px-10 py-2 hover:bg-primary-300 
            hover:text-white duration-700 text-xs"
      >
        SIGN UP
      </Link>
    </>
  );
};

export default SignUpButton;
