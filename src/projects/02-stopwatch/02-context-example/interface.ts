import { ITimer } from "../shared/interface";

export interface StopWatchContextProps {
  timer: ITimer;
  handleStart: () => void;
  handlePause: () => void;
  handleStop: () => void;
}
