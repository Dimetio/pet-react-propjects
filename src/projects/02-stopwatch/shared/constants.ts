import { createContext } from "react";

import { StopWatchContextProps } from "../02-context-example/interface";

export const StopWatchContext = createContext<StopWatchContextProps | null>(null);

export const INIT_VALUES = {
  counter: 0,
  minutes: 0,
  seconds: 0,
};
