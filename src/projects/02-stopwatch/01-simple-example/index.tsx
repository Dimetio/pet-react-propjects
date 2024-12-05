import { Button, ContentWrapper } from "../../../components";
import Dial from "../shared/components/Dial";

import { useActions } from "../shared/hooks";

function SimpleStopWatch() {
  const { timer, handleStart, handleStop, handlePause } = useActions();

  return (
    <ContentWrapper title="Simple StopWatch">
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

export default SimpleStopWatch;
