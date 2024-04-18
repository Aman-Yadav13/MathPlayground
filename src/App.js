import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import MatchingGame from "./Components/NumberMatching/MatchingGame";
import AdditionGame from "./Components/AdditionGame/AdditionGame";
import Quiz from "./Components/QuizGame/quizgame";
import MineGame from "./Components/MineGame/MineGame";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/number-matching" exact element={<MatchingGame />} />
          <Route path="/addition-game" exact element={<AdditionGame />} />
          <Route path="/quiz-game" exact element={<Quiz />} />
          <Route path="/mine-game" exact element={<MineGame />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
