import { Provider } from "react-redux";
import Counter from "./Counter";

import { store } from "./store";

function ReduxCounter() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default ReduxCounter;
