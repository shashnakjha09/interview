import React from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import { AppProvider } from "./Provider";

function ContextAPI() {
  return (
    <div>
      <div>
        <h1>Question5(ContextAPI)</h1>
      </div>
      <AppProvider>
        <ComponentA />

        <ComponentB />
      </AppProvider>
    </div>
  );
}

export default ContextAPI;
