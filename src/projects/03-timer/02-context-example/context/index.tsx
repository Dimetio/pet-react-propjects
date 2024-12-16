import { createContext } from "react";

import { ITimerContext } from "../../shared/interface";

const TimerContext = createContext<ITimerContext | null>(null);

export default TimerContext;
