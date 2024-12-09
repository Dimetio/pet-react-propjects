import { Routes, Route } from "react-router";

import Main from "./components/Main";

import Counter from "./projects/01-counter";
import StopWatch from "./projects/02-stopwatch";

function App() {
  return (
    <Routes>
      <Route index element={<Main />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/stopwatch" element={<StopWatch />} />
    </Routes>
  );
}

export default App;
