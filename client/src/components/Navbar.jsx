import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={assets.logo} alt="" />
        {user ? (
          <div className="flex justify-center gap-2">
            <Link className="" to={"/application"}>Apply Jobs</Link>
            <p>|</p>
            <p className="max-sm:hidden">Hi,{user.firstName + " " + user.lastName}</p>
            <UserButton/>
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xl">
            <button className="text-gray-600">Recruiter Login</button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-600 text-white px-6 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
