import React from "react";
import BgShorten from "../assets/bg-shorten-mobile.svg";
export default function ShortenLink({
  onChange,
  value,
  handleSubmit,
  errorMessage,
}) {
  return (
    <div
      className="relative  bg-purple flex flex-col   p-8 space-y-4  rounded-xl  bg-contain bottom-16 w-full h-full"
      style={{ backgroundImage: `url(${BgShorten})` }}
    >
      <input
        className="p-4 font-bold w-full h-full"
        placeholder="Shorten a link here..."
        onChange={onChange}
        value={value}
      ></input>
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}
      <button
        onClick={handleSubmit}
        className="bg-blue rounded-md text-white p-4 w-full h-full"
      >
        Shorten It!
      </button>
    </div>
  );
}
