import React from "react";
import QuestionNo2 from "../Question2";

function LargestinArry() {
  let testArry = [
    "W",
    "L",
    "W",
    "W",
    "W",
    "L",
    "W",
    "W",
    "L",
    "L",
    "L",
    "W",
    "W",
    "L",
    "L",
  ];
  function streak(arr) {
    var i,
      temp,
      streak,
      length = arr.length,
      highestStreak = 0;

    for (i = 0; i < length; i++) {
      if (temp !== "" && temp === arr[i]) {
        streak++;
      } else {
        streak = 1;
      }

      temp = arr[i];

      if (streak > highestStreak) {
        highestStreak = streak;
      }
    }

    return highestStreak;
  }
  console.log(streak(testArry));
  return (
    <div>
      <div>
        <h1>Question6</h1>
      </div>
      {streak(testArry)}
    </div>
  );
}

export default LargestinArry;
