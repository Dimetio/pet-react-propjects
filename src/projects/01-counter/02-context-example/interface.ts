import { Dispatch } from "react";

export interface IInitialState {
  counter: number;
}

export interface IContextProps {
  state?: IInitialState;
  dispatch: Dispatch<IAction>;
  counter: number;
  onDecrease: () => void;
  onIncrease: () => void;
  onReset: () => void;
}

export interface IAction {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}
