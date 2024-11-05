import { CounterClassNames } from "../enum";

function Result({ counter }: { counter: number }) {
  const className =
    counter < 0
      ? CounterClassNames.Negative
      : counter > 0
        ? CounterClassNames.Positive
        : CounterClassNames.Neutral;

  return <p className={`text-center text-8xl font-bold ${className}`}>{counter}</p>;
}

export default Result;
