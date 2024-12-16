import { ReactNode, useReducer } from "react";

import { CounterContext } from ".";
import reducer from "../reducer";

import { COUNTER_ACTIONS } from "../constants";

import { IInitialState } from "../interface";

/** Начальное состояние */
const initialState: IInitialState = { counter: 0 };

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleDecrease() {
    dispatch({ type: COUNTER_ACTIONS.DECREASE });
  }
  function handleIncrease() {
    dispatch({ type: COUNTER_ACTIONS.INCREASE });
  }
  function handleReset() {
    dispatch({ type: COUNTER_ACTIONS.RESET });
  }

  return (
    <CounterContext.Provider
      value={{
        ...state,
        dispatch,
        onDecrease: handleDecrease,
        onIncrease: handleIncrease,
        onReset: handleReset,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};
