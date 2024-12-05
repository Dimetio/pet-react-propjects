import { Button, ContentWrapper } from "../../../components";
import Dial from "../shared/components/Dial";

import useStopWatchContext from "./hooks/useStopWatchContext";

function StopWatch() {
  const { timer, handleStart, handlePause, handleStop } = useStopWatchContext();

  return (
    <ContentWrapper title="Context StopWatch">
      <Dial timer={timer} />

      <div className="grid gap-3 sm:grid-cols-3">
        <Button className="bg-green-400 hover:bg-green-500" onClick={handleStart}>
          Start
        </Button>

        <Button className="bg-neutral-400 hover:bg-neutral-500" onClick={handlePause}>
          Pause
        </Button>

        <Button className="bg-red-400 hover:bg-red-500" onClick={handleStop}>
          Stop
        </Button>
      </div>
    </ContentWrapper>
  );
}

export default StopWatch;
