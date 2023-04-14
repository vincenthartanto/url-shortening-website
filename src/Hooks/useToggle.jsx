import React, { useState } from "react";

export default function useToggle() {
  const [isToggle, setIsToggle] = useState(false);

  function changeToggle() {
    setIsToggle((isToggle) => !isToggle);
  }
  function isToggleTrue() {
    setIsToggle(true);
  }
  return { isToggle, changeToggle, isToggleTrue };
}
