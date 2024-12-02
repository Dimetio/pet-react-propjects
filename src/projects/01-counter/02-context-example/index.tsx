import Counter from "./Counter";

import { CounterProvider } from "./context/CounterProvider";

function ContextCounter() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}

export default ContextCounter;
