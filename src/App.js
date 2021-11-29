// import logo from "./logo.svg";
import "./App.css";
import GameSort from "./component/gameDataSort/index";
import QuestionNo2 from "./component/Question2";
import Timer from "./component/Question3/Timer";
import Widget from "./component/Question4/Question3";
import ContextAPI from "./component/Question5ContextAPI";
import LargestinArry from "./component/Question6/index";
function App() {
  return (
    <div className="App">
      <GameSort />
      <QuestionNo2 />
      <Timer />
      <Widget />
      <ContextAPI />
      <LargestinArry />
    </div>
  );
}

export default App;
