import React from "react";
import { AppContext } from "./Provider";
import { useContext } from "react";
function ComponentA() {
  const [message, setMessage] = useContext(AppContext);
  return <div>{<h1>{message} (from component A)</h1>}</div>;
}

export default ComponentA;
