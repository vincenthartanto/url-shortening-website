import React from "react";

export default function FooterComponents({
  title,
  item1,
  item2,
  item3,
  item4 = "",
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="font-bold text-white">{title}</div>
      <ul className="text-center text-grey space-y-2">
        <li className="hover:text-blue">{item1}</li>
        <li className="hover:text-blue">{item2}</li>
        <li className="hover:text-blue">{item3}</li>
        <li className="hover:text-blue">{item4}</li>
      </ul>
    </div>
  );
}
