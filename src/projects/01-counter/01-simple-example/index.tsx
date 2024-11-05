import { useState } from "react";

import { Result, Button, Header, ContentWrapper } from "../shared/components";

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
    <ContentWrapper>
      <Header title="Simple Counter" />

      <Result counter={counter} />

      <div className="grid gap-3 sm:grid-cols-3">
        <Button className="bg-red-500 hover:bg-red-400" onClick={handleDecrease}>
          -
        </Button>

        <Button className="bg-neutral-500 hover:bg-neutral-400" onClick={handleReset}>
          Reset
        </Button>

        <Button className="bg-green-500 hover:bg-green-400" onClick={handleIncrease}>
          +
        </Button>
      </div>
    </ContentWrapper>
  );
}

export default SimpleCounter;
