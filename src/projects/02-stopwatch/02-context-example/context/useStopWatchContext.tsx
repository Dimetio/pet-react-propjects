import { useActions } from "../../shared/hooks";

import { StopWatchContext } from "../../shared/constants";

export const StopWatchProvider = ({ children }: { children: React.ReactNode }) => {
  const { timer, handleStart, handleStop, handlePause } = useActions();

  return (
    <StopWatchContext.Provider value={{ timer, handleStart, handleStop, handlePause }}>
      {children}
    </StopWatchContext.Provider>
  );
};
