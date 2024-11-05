import { Button, ContentWrapper, Header, Result } from "../shared/components";

import useCounterContext from "./hook/useCounterContext";

function Counter() {
  const { counter, onDecrease, onIncrease, onReset } = useCounterContext();

  return (
    <ContentWrapper>
      <Header title="Context Counter" />

      <Result counter={counter} />

      <div className="grid gap-3 sm:grid-cols-3">
        <Button className="bg-red-500 hover:bg-red-400" onClick={onDecrease}>
          -
        </Button>

        <Button className="bg-neutral-500 hover:bg-neutral-400" onClick={onReset}>
          Reset
        </Button>

        <Button className="bg-green-500 hover:bg-green-400" onClick={onIncrease}>
          +
        </Button>
      </div>
    </ContentWrapper>
  );
}

export default Counter;
