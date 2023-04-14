import React from "react";

export default function AdvanceDescription({ description, title, img }) {
  return (
    <div className="bg-white flex flex-col items-center space-y-2 rounded-xl">
      <div className="bg-purple rounded-full p-4 w-12 relative bottom-12 translate-y-6">
        <img className="w-full h-full" src={img}></img>
      </div>
      <h1 className="text-2xl font-bold text-darkGrey">{title}</h1>
      <p className="text-grey text-center font-medium p-4 w-full">
        {description}
      </p>
    </div>
  );
}
