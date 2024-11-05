import { createContext } from "react";

import { IContextProps } from "./interface";

export const CounterContext = createContext<IContextProps | null>(null);

export const COUNTER_ACTIONS = {
  DECREASE: "DECREASE",
  INCREASE: "INCREASE",
  RESET: "RESET",
} as const;
