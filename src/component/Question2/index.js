import React, { useState } from "react";

export default function QuestionNo2() {
  const [value, setValue] = useState("This Value Is Coming From State");
  const [value2, setValue2] = useState(
    "This Is How We Can Wright JS inside HTMl"
  );

  return (
    <div>
      <div>
        <h1>Q2</h1>
      </div>
      <h3>{value2}</h3>
      <h3>{value}</h3>
    </div>
  );
}
