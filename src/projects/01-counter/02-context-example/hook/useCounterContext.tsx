import { useContext } from "react";

import { CounterContext } from "../constants";

function useCounterContext() {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error("useCounterContext должен использоваться внутри CounterProvider");
  }

  return context;
}

export default useCounterContext;
