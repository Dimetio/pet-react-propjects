import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { CounterDispatch, RootState } from "../store";

export const useCounterDispatch = () => useDispatch<CounterDispatch>();

export const useCounterSelector: TypedUseSelectorHook<RootState> = useSelector;
