import Counter from "./projects/01-counter";
import StopWatch from "./projects/02-stopwatch";

function App() {
  return (
    <main className="grid min-h-screen place-items-center gap-20 bg-gray-50 p-3">
      <Counter />
      <StopWatch />
    </main>
  );
}

export default App;
