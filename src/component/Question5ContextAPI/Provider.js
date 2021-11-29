import React, { createContext, useState } from "react";

export const AppContext = createContext();

const { Provider } = AppContext;

export const AppProvider = (props) => {
  const [message, setMessage] = useState("My name is context");

  return <Provider value={[message, setMessage]}>{props.children}</Provider>;
};
