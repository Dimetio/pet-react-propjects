import { useState } from "react";

import { Button, ContentWrapper } from "../../../components";
import { Result } from "../shared/components";

/** Вариант с использованием `useState` */
function SimpleCounter() {
  const [counter, setCounter] = useState<number>(0);

  function handleDecrease() {
    setCounter((counter) => counter - 1);
  }

  function handleIncrease() {
    setCounter((counter) => counter + 1);
  }

  function handleReset() {
    setCounter(0);
  }

  return (
    <ContentWrapper title="Simple Counter">
      <Result counter={counter} />

      <div className="grid gap-3 sm:grid-cols-3">
        <Button color="red" onClick={handleDecrease}>
          -
        </Button>

        <Button color="neutral" onClick={handleReset}>
          Reset
        </Button>

        <Button color="green" onClick={handleIncrease}>
          +
        </Button>
      </div>
    </ContentWrapper>
  );
}

export default SimpleCounter;
