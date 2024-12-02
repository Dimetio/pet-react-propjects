import { useContext } from "react";

import { StopWatchContext } from "../../shared/constants";

function useStopWatchContext() {
  const context = useContext(StopWatchContext);
  if (!context) {
    throw new Error("useAppContext должен использоваться внутри StopWatchProvider");
  }

  return context;
}

export default useStopWatchContext;
