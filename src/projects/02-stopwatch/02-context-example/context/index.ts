import { createContext } from "react";

import { StopWatchContextProps } from "../interface";

export const StopWatchContext = createContext<StopWatchContextProps | null>(null);
