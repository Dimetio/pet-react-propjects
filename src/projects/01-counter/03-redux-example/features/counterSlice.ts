import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ICounterState } from "../interface";

const initialState: ICounterState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    reset: () => initialState,
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.counter -= action.payload;
    },
  },
});

export const { reset, increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export const counterReducer = counterSlice.reducer;

export const counterSelector = (state: { counter: ICounterState }) => state.counter;
