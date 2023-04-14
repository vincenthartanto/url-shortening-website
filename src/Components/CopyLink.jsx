import React from "react";
import useToggle from "../Hooks/useToggle";

export default function CopyLink({ longLink, copyClipboard, shortLink }) {
  const buttonClick = useToggle();
  return (
    <div className="bg-white w-full p-4 space-y-2">
      <div className="overflow-hidden text-ellipsis">{longLink}</div>
      <hr></hr>
      <div className="space-y-4">
        <button
          onClick={() => {
            copyClipboard();
            buttonClick.isToggleTrue;
          }}
          className="text-blue break-normal"
        >
          {shortLink}
        </button>
        <button
          onClick={() => {
            copyClipboard();
            buttonClick.isToggleTrue;
          }}
          className={`rounded-md text-white  w-full p-2 font-bold ${
            buttonClick ? "bg-purple hover:bg-purple" : "bg-blue"
          }`}
        >
          {buttonClick ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
