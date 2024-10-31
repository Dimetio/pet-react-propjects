import { Button, ContentWrapper, Header, Result } from "../shared/components";
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
    <ContentWrapper>
      <Header title="Redux Counter" />

      <Result counter={counter} />

      <div className="grid gap-3 sm:grid-cols-5">
        <Button
          className="bg-red-500 hover:bg-red-400"
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>

        <Button
          className="bg-red-500 hover:bg-red-400"
          onClick={() => dispatch(decrementByAmount(10))}
        >
          -10
        </Button>

        <Button
          className="bg-neutral-500 hover:bg-neutral-400"
          onClick={() => dispatch(reset())}
        >
          Reset
        </Button>

        <Button
          className="bg-green-500 hover:bg-green-400"
          onClick={() => dispatch(increment())}
        >
          +
        </Button>

        <Button
          className="bg-green-500 hover:bg-green-400"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          +10
        </Button>
      </div>
    </ContentWrapper>
  );
}

export default Counter;
