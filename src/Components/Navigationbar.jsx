import React from "react";
import Logo from "../assets/logo.svg";
import HamburgerBar from "../assets/HamburgerBar.png";
import useToggle from "../Hooks/useToggle";
import useWindow from "../Hooks/useWindow";
export default function Navigationbar() {
  const window = useWindow();
  const hambar = useToggle();

  console.log(hambar.isToggle);
  return (
    <nav className="flex w-full justify-between p-8 bg-white">
      <div className="flex items-center w-full space-x-4">
        <img className="w-[6.5rem] h-[2rem]" src={Logo}></img>
        <ul className="hidden md:flex space-x-8 font-bold text-grey ">
          <li className="hover:text-black">Features</li>
          <li className="hover:text-black">Pricing</li>
          <li className="hover:text-black">Resources</li>
        </ul>
      </div>
      {window.width >= 768 ? (
        <ul className="flex items-center space-x-4 font-bold  text-grey">
          <li className="hover:text-black">Login</li>
          <button className="bg-blue rounded-full h-[2.5rem] w-[6rem] text-cenetr text-white hover:bg-opacity-50">
            Sign Up
          </button>
        </ul>
      ) : (
        <button className="md:hidden" onClick={hambar.changeToggle}>
          <img className="w-[1.5rem] h-[1.5rem]" src={HamburgerBar}></img>
        </button>
      )}

      {hambar.isToggle && (
        <div className=" absolute w-[20rem] h-[24rem] bg-purple left-1/2 -translate-x-1/2 top-[6rem] rounded-md text-white z-10">
          <ul className="flex flex-col justify-center items-center text-center font-bold py-8 space-y-4 px-4">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            <hr className=" w-full bg-gray-100"></hr>
            <li>Login</li>

            <button className="bg-blue rounded-full p-4 w-full hover:bg-opacity-50">
              Sign Up
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
}
