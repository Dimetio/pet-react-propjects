import { createContext } from "react";

import { IContextProps } from "../interface";

export const CounterContext = createContext<IContextProps | null>(null);
