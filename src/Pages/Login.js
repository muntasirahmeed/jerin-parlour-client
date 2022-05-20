import React from "react";
import logo from "../Assests/Images/Group 33092.png";
import Navber from "../Shared/Navber";
import Footer from "../Shared/Footer";
import googleImg from "../Assests/Images/Icon/Group 573.png";
const Login = () => {
  // ? state management herer
  return (
    <div>
      <Navber></Navber>
      <div className="h-full md:h-[95vh]  my-10 lg:my-0 container flex justify-center items-center">
        <div className="w-full  md:w-[50%] lg:w-[35%]">
          <img className="h-[60px] mx-auto w-40" src={logo} alt="" />
          <div className="  pt-16 pb-10 px-5 md:px-10  bg-secondary rounded-xl mt-10">
            <form>
              <div className="flex flex-col space-y-8">
                <input
                  type="text"
                  placeholder="Email"
                  class="input w-full placeholder:text-lg py-6 "
                />
                <input
                  type="text"
                  placeholder="Password"
                  class="input w-full placeholder:text-lg py-6 "
                />
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="flex pl-1 items-center ">
                  <input
                    type="checkbox"
                    name=""
                    className="checkbox checkbox-sm checkbox-primary mr-3"
                    id=""
                  />
                  <span className="text-sm  text-gray-500 ">Remember me</span>
                </div>
                <p className="text-sm  text-gray-500 ">Forget Password?</p>
              </div>
              <button
                type="submit"
                className="px-8 mt-9 w-full  rounded py-3 hover:bg-rose-600 transition duration-300 ease-in-out bg-primary text-white"
              >
                Login
              </button>
              <p className="text-sm mt-4 text-center text-gray-500">
                Don't have and account ?{" "}
                <span className="text-primary">Login</span>
              </p>
              <div className="divider my-7 ">Or</div>
              <div className="bg-white rounded-full shadow-sm py-3 text-gray-500 text-center relative">
                <span>Continue With Google</span>
                <img
                  className="h-8 absolute top-2 left-2 w-8"
                  src={googleImg}
                  alt=""
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Login;
//  <input
//    type="text"
//    placeholder="Password"
//    className=" py-3 px-2 rounded-sm border-b-2 border-gray-200 placeholder:text-black  focus:outline-none"
//  />;
//  <input
//    type="text"
//    placeholder="Email"
//    className=" py-3 px-2 rounded-sm border-b-2 border-gray-200 placeholder:text-black  focus:outline-none"
//  />;
