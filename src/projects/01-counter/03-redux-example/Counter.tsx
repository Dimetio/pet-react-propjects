import { ContentWrapper, Button } from "../../../components";
import { Result } from "../shared/components";

import {
  counterSelector,
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  reset,
} from "./features/counterSlice";

import { useCounterDispatch, useCounterSelector } from "./hook/useRedux";

function Counter() {
  const dispatch = useCounterDispatch();
  const { counter } = useCounterSelector(counterSelector);

  return (
    <ContentWrapper title="Redux Counter">
      <Result counter={counter} />

      <div className="grid gap-3 sm:grid-cols-5">
        <Button color="red" onClick={() => dispatch(decrement())}>
          -
        </Button>

        <Button color="red" onClick={() => dispatch(decrementByAmount(10))}>
          -10
        </Button>

        <Button color="neutral" onClick={() => dispatch(reset())}>
          Reset
        </Button>

        <Button color="green" onClick={() => dispatch(increment())}>
          +
        </Button>

        <Button color="green" onClick={() => dispatch(incrementByAmount(10))}>
          +10
        </Button>
      </div>
    </ContentWrapper>
  );
}

export default Counter;
