import { Routes, Route } from "react-router";

import Main from "./components/Main";

import Counter from "./projects/01-counter";
import StopWatch from "./projects/02-stopwatch";
import Timer from "./projects/03-timer/";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/stopwatch" element={<StopWatch />} />
      <Route path="/timer" element={<Timer />} />
    </Routes>
  );
}

export default App;
