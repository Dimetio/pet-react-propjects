import StopWatch from "./StopWatch";

import { StopWatchProvider } from "./context/StopWatchContext";

function ContextStopWatch() {
  return (
    <StopWatchProvider>
      <StopWatch />
    </StopWatchProvider>
  );
}

export default ContextStopWatch;
