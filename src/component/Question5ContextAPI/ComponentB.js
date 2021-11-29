import React from "react";
import { AppContext } from "./Provider";
import { useContext } from "react";
function ComponentB() {
  const [message, setMessage] = useContext(AppContext);

  return (
    <div>
      <h1>{message} (from component B)</h1>
    </div>
  );
}

export default ComponentB;
