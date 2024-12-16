import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { INIT_VALUES } from "../constants";

function useActions() {
  const [timer, setTimer] = useState(INIT_VALUES);
  const [timerStart, setTimerStart] = useState(false);
  const [showForm, setShowForm] = useState(true);

  useEffect(() => {
    let interval = null;

    if (timerStart && timer.timeLeft > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          const timeLeft = prev.timeLeft - 1;

          if (timeLeft <= 0) {
            setTimerStart(false);
            toast.info("Время вышло");

            return INIT_VALUES;
          }

          return {
            timeLeft,
            minutes: Math.floor(timeLeft / 60)
              .toString()
              .padStart(2, "0"),
            seconds: (timeLeft % 60).toString().padStart(2, "0"),
          };
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerStart]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const time = parseInt(formData.get("time") as string, 10);

    if (!time || time <= 0 || time > 60) {
      toast.error("Пожалуйста, установите число от 1 до 60");
      return;
    }

    setTimer(() => {
      return {
        timeLeft: time * 60,
        minutes: Math.floor((time * 60) / 60)
          .toString()
          .padStart(2, "0"),
        seconds: ((time * 60) % 60).toString().padStart(2, "0"),
      };
    });

    setShowForm(false);
    form.reset();
  }

  function handleStart() {
    if (timer.timeLeft === 0) setTimer((v) => ({ ...v, timeLeft: 0 }));
    setTimerStart(true);
  }

  function handleReset() {
    setTimerStart(false);
    setShowForm(true);
    setTimer(INIT_VALUES);
  }

  function handleClick() {
    return timerStart ? setTimerStart(false) : handleStart();
  }

  return {
    timer,
    showForm,
    timerStart,
    onReset: handleReset,
    onClick: handleClick,
    onSubmit: handleSubmit,
  };
}

export default useActions;
