import StopWatch from "./StopWatch";

import { StopWatchProvider } from "./context/useStopWatchContext";

function ContextStopWatch() {
  return (
    <StopWatchProvider>
      <StopWatch />
    </StopWatchProvider>
  );
}

export default ContextStopWatch;
