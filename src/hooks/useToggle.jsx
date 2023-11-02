import { useState } from "react";
export const useToggle = (initialval = false) => {
  const [value, setvalue] = useState(initialval);
  const toggle = () => {
    setvalue((prev) => !prev);
  };
  return [value, toggle];
};
