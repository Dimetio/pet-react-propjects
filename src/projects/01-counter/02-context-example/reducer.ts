import { COUNTER_ACTIONS } from "./constants";

import { IAction, IInitialState } from "./interface";

function reducer(state: IInitialState, action: IAction) {
  switch (action.type) {
    case COUNTER_ACTIONS.DECREASE:
      return { ...state, counter: state.counter - 1 };
    case COUNTER_ACTIONS.INCREASE:
      return { ...state, counter: state.counter + 1 };
    case COUNTER_ACTIONS.RESET:
      return { ...state, counter: 0 };
    default:
      return state;
  }
}

export default reducer;
