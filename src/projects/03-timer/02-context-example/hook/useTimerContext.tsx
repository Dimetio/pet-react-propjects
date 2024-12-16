import { useContext } from "react";

import TimerContext from "../context";

function useTimerContext() {
  const context = useContext(TimerContext);

  if (!context) {
    throw new Error("useTimerContext должен использоваться внутри TimerProvider");
  }

  return context;
}

export default useTimerContext;
