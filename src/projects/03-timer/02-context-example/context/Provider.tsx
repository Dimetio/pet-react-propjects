import TimerContext from ".";

import useActions from "../../shared/hooks/useActions";

function TimerProvider({ children }: { children: React.ReactNode }) {
  const { showForm, timer, timerStart, onSubmit, onReset, onClick } = useActions();

  return (
    <TimerContext.Provider value={{ showForm, timer, timerStart, onSubmit, onReset, onClick }}>
      {children}
    </TimerContext.Provider>
  );
}

export default TimerProvider;
