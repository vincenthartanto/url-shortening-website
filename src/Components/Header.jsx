import React, { useState } from "react";
import IllustrationWorking from "../assets/illustration-working.svg";
import ShortenLink from "./ShortenLink";
import useToggle from "../Hooks/useToggle";
import CopyLink from "./CopyLink";
export default function Header() {
  const [link, setLink] = useState();
  const [shortLink, setShortLink] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${link}`
      );
      const json = await response.json();

      setShortLink(json.result.short_link);
      setCopyLinkList((cl) => {
        const data = {
          longLink: link,
          shortCopyLink: json.result.short_link,
          buttonClick: false,
        };
        return [...cl, data];
      });
    } catch (e) {
      setErrorMessage("Type the url properly!");
      window.setTimeout(() => {
        setErrorMessage("");
      }, 1000);

      window.clearTimeout();
    }
  };
  const [copyLinkList, setCopyLinkList] = useState([]);
  function copyCliboard() {
    buttonClick.isToggleTrue();
    navigator.clipboard.writeText(shortLink);
  }
  return (
    <header className="flex flex-col items-center justify-center w-full">
      <div className="flex flex-col justify-center items-center space-y-4 w-full p-12 md:grid grid-cols-2 bg-white relative  h-[90vh] md:h-[80vh]">
        <img className="w-[40rem] md:order-2" src={IllustrationWorking}></img>
        <div className="md:order-1 flex flex-col items-center space-y-4 w-full">
          <h1 className="font-bold text-5xl text-center text-darkGrey md:text-6xl md:text-left w-full">
            More than just shorter link
          </h1>
          <p className="text-center text-grey md:text-left w-full">
            Build your brand's recognition and get detailed insights on how your
            links are performing
          </p>
          <button className="bg-blue font-bold text-white w-[12.3rem] rounded-full p-4 md:mr-auto">
            Get Started
          </button>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center w-[90%] md:w-[50%]">
        <ShortenLink
          value={link}
          onChange={(e) => {
            setLink(e.target.value);
          }}
          handleSubmit={handleSubmit}
          errorMessage={errorMessage}
        ></ShortenLink>
        {copyLinkList.map((cl, index) => {
          return (
            <CopyLink
              key={index}
              longLink={cl.longLink}
              copyClipboard={copyCliboard}
              shortLink={cl.shortCopyLink}
            ></CopyLink>
          );
        })}
      </div>
    </header>
  );
}
