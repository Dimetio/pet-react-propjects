import { configureStore } from "@reduxjs/toolkit";

import { counterReducer as counter } from "./features/counterSlice";

export const store = configureStore({
  reducer: { counter },
  devTools: true,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware();
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type CounterDispatch = typeof store.dispatch;
