import { StopWatchContext } from ".";

import { useActions } from "../../shared/hooks";

export const StopWatchProvider = ({ children }: { children: React.ReactNode }) => {
  const { timer, handleStart, handleStop, handlePause } = useActions();

  return (
    <StopWatchContext.Provider value={{ timer, handleStart, handleStop, handlePause }}>
      {children}
    </StopWatchContext.Provider>
  );
};
