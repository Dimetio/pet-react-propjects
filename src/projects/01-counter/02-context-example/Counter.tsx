import { ContentWrapper, Button } from "../../../components";
import { Result } from "../shared/components";

import useCounterContext from "./hook/useCounterContext";

function Counter() {
  const { counter, onDecrease, onIncrease, onReset } = useCounterContext();

  return (
    <ContentWrapper title="Context Counter">
      <Result counter={counter} />

      <div className="grid gap-3 sm:grid-cols-3">
        <Button color="red" onClick={onDecrease}>
          -
        </Button>

        <Button color="neutral" onClick={onReset}>
          Reset
        </Button>

        <Button color="green" onClick={onIncrease}>
          +
        </Button>
      </div>
    </ContentWrapper>
  );
}

export default Counter;
