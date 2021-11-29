import React, { useState } from "react";

function GameSort() {
  const [value, setValue] = useState([]);
  const Game = [
    { name: "Adam k", score: "120", CompletionTime: "144" },
    { name: "Stephan F", score: "109", CompletionTime: "101" },
    { name: "Brian L", score: "101", CompletionTime: "121" },
    { name: "Ben S", score: "113", CompletionTime: "87" },
    { name: "Laura A", score: "109", CompletionTime: "119" },
    { name: "Roger M", score: "109", CompletionTime: "101" },
    { name: "Lily Q", score: "104", CompletionTime: "107" },
    { name: "Shane W", score: "104", CompletionTime: "107" },
    { name: "Mark T", score: "107", CompletionTime: "97" },
  ];

  function compare_Score(a, b) {
    if (a.score < b.score) {
      return 1;
    } else if (a.score > b.score) {
      return -1;
    } else {
      return 0;
    }
  }
  console.log(Game.sort(compare_Score));
  return (
    <div>
      <div>
        <h1>QUESTION NO 1</h1>
      </div>
      <table style={{ width: "50%", border: "1px solid black" }}>
        <tr>
          <th>Rank</th>
          <th>Display Name</th>
          <th>Score</th>
        </tr>
        {Game.sort(compare_Score).map((item, index) => {
          return (
            <tr key={index}>
              <td style={{ border: "1px solid black" }}>{index + 1}</td>
              <td style={{ border: "1px solid black" }}>{item.name}</td>
              <td style={{ border: "1px solid black" }}>
                {item.score}({item.CompletionTime})
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default GameSort;
