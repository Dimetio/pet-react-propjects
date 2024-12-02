import { useState } from "react";

import { INIT_VALUES } from "../constants";

function useActions() {
  const [timer, setTimer] = useState(INIT_VALUES);
  const [timerStart, setTimerStart] = useState(false);
  const [timerInterval, setTimerInterval] = useState<number | undefined>();

  function handleStart() {
    if (!timerStart) {
      setTimerInterval(
        setInterval(() => {
          setTimer((prev) => ({
            counter: prev.counter + 1,
            minutes: Math.floor(prev.counter / 60),
            seconds: prev.counter % 60,
          }));
        }, 1000),
      );

      setTimerStart(true);
    }
  }

  function handleStop() {
    clearInterval(timerInterval);
    setTimerStart(false);
    setTimer(INIT_VALUES);
  }

  function handlePause() {
    setTimerStart(false);
    clearInterval(timerInterval);
  }

  return { timer, handleStart, handleStop, handlePause };
}

export default useActions;
