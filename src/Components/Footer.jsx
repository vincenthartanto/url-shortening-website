import React from "react";
import BgBoostMobile from "../assets/bg-boost-mobile.svg";
import FooterComponents from "./FooterComponents";
import FacebookIcon from "../assets/icon-facebook.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import PinterestIcon from "../assets/icon-pinterest.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
export default function Footer() {
  return (
    <footer className="w-full h-full mt-10">
      <div
        className="h-[30vh] bg-purple bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center space-y-4"
        style={{ backgroundImage: `url(${BgBoostMobile})` }}
      >
        <h1 className="font-bold text-2xl text-white">
          Boost your links today
        </h1>
        <button className="bg-blue font-bold text-white rounded-full p-2 w-[30%] md:w-[10rem]">
          Get Started
        </button>
      </div>
      <div className="bg-darkestGrey flex flex-col justiy-center items-center p-8 space-y-8">
        <h1 className="text-white text-3xl font-bold"> Shortly</h1>
        <FooterComponents
          title={"Features"}
          item1={"Link Shortening"}
          item2={"Branded Link"}
          item3={"Analytics"}
        ></FooterComponents>
        <FooterComponents
          title={"Resources"}
          item1={"Blog"}
          item2={"Developers"}
          item3={"Support"}
        ></FooterComponents>
        <FooterComponents
          title={"Company"}
          item1={"About"}
          item2={"Our Team"}
          item3={"Carrers"}
          item4="Contact"
        ></FooterComponents>
        <ul className="flex space-x-4 items-center">
          <li>
            <img src={FacebookIcon}></img>
          </li>
          <li>
            <img src={TwitterIcon}></img>
          </li>
          <li>
            <img src={PinterestIcon}></img>
          </li>
          <li>
            <img src={InstagramIcon}></img>
          </li>
        </ul>
      </div>
    </footer>
  );
}
