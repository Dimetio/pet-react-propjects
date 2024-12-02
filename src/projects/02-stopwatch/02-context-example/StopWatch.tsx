import { Button, ContentWrapper } from "../../../components";
import Dial from "../shared/components/Dial";

import useStopWatchContext from "./hooks/useStopWatchContext";

function StopWatch() {
  const { timer, handleStart, handlePause, handleStop } = useStopWatchContext();

  return (
    <ContentWrapper title="Context StopWatch">
      <Dial timer={timer} />

      <div className="grid gap-3 sm:grid-cols-3">
        <Button color="green" onClick={handleStart}>
          Start
        </Button>

        <Button color="neutral" onClick={handlePause}>
          Pause
        </Button>

        <Button color="red" onClick={handleStop}>
          Stop
        </Button>
      </div>
    </ContentWrapper>
  );
}

export default StopWatch;
