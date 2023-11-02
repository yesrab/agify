import React from "react";
import { useToggle } from "../hooks/useToggle";

function MycustomHook() {
  const [isvisible, toggle] = useToggle();

  return (
    <div>
      <button onClick={toggle}>{isvisible ? "Hide" : "show"}</button>
      {isvisible && <h1 style={{ color: "blue" }}>Hidden Text</h1>}
    </div>
  );
}
export default MycustomHook;
