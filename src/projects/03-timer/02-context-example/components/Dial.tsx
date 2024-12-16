import { FiPause, FiPlay } from "react-icons/fi";

import { Button } from "../../../../components";

import useTimerContext from "../hook/useTimerContext";

function Dial() {
  const { timer, timerStart, onClick, onReset } = useTimerContext();

  return (
    <div className="grid items-center gap-3">
      <div className="flex items-center justify-center text-6xl font-bold">
        <span>{timer.minutes}</span>:<span>{timer.seconds}</span>
      </div>

      <button
        type="button"
        className="m-auto flex h-[50px] w-[50px] items-center justify-center rounded border hover:bg-gray-50"
        onClick={onClick}
      >
        {timerStart ? <FiPause /> : <FiPlay />}
      </button>

      <Button color="red" onClick={onReset}>
        Reset Timer
      </Button>
    </div>
  );
}

export default Dial;
