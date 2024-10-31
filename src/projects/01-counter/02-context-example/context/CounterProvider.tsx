import { ReactNode, useReducer } from "react";
import { COUNTER_ACTIONS, CounterContext } from "../constants";
import { IInitialState } from "../interface";
import reducer from "../reducer/reducer";

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
