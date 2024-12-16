import { useContext } from "react";

import { StopWatchContext } from "../context";

function useStopWatchContext() {
  const context = useContext(StopWatchContext);
  if (!context) {
    throw new Error("useStopWatchContext должен использоваться внутри StopWatchProvider");
  }

  return context;
}

export default useStopWatchContext;
