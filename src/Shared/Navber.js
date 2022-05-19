import React, { useState } from "react";
import logo from "../Assests/Images/Group 33092.png";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";

const Navber = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="container ">
      <div className="flex items-center  py-[12px] md:py-2 ">
        <div className="lg:flex-1">
          <img
            onClick={() => navigate("/")}
            className="h-10 cursor-pointer"
            src={logo}
            alt=""
          />
        </div>
        <div onClick={() => setOpen(!open)}>
          {open ? (
            <XIcon className="w-10 h-10 absolute right-3 top-[12px] cursor-pointer md:hidden"></XIcon>
          ) : (
            <MenuAlt1Icon className="w-10 h-10 absolute right-3 top-[12px] cursor-pointer md:hidden"></MenuAlt1Icon>
          )}
        </div>
        <div
          className={`lg:flex-1 flex flex-col p-4 md:p-0 rounded-b-lg  md:flex-row justify-end items-start md:items-center  space-x-0 md:space-x-8  transition-all duration-500 ease-in-out  absolute md:static   md:z-auto z-[2] right-0 w-1/2 md:w-full  space-y-2 md:space-y-0  ${
            open
              ? "top-16 opacity-100 bg-white transition-all ease-out"
              : "top-[-490px] md:opacity-100 opacity-0 transition-all ease-in"
          }`}
        >
          <Link className="text-[#474747]" to="/">
            Home
          </Link>
          <Link className="text-[#474747]" to="/our-portfolio">
            Our Portfolio
          </Link>
          <Link className="text-[#474747]" to="/our-team">
            Our Team
          </Link>
          <Link className="text-[#474747] " to="/contact">
            Contact Us
          </Link>
          <Link
            to="/login"
            className=" px-8  rounded py-2 hover:bg-rose-600 transition duration-300 ease-in-out bg-primary text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
