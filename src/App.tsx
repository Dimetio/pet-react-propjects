import { Routes, Route } from "react-router";

import Navigation from "./components/Navigation";

import Counter from "./projects/01-counter";
import StopWatch from "./projects/02-stopwatch";

function App() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr] bg-gray-50 p-5">
      <header className="">
        <Navigation />
      </header>

      <main className="grid place-items-center gap-20">
        <Routes>
          <Route index element={<>Главная страница</>} />
          <Route path="counter" element={<Counter />} />
          <Route path="stopwatch" element={<StopWatch />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
