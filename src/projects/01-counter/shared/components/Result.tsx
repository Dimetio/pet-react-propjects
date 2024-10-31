import { CounterClassNames } from "../enum";

function Result({ counter }: { counter: number }) {
  const className =
    counter < 0
      ? CounterClassNames.Negative
      : counter > 0
      ? CounterClassNames.Positive
      : CounterClassNames.Neutral;

  return (
    <p className={`font-bold text-center text-8xl ${className}`}>{counter}</p>
  );
}

export default Result;
