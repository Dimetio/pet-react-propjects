import { ITimer } from "../interface";

function Dial({ timer }: { timer: ITimer }) {
  const minutes = timer.minutes.toString().padStart(2, "0");
  const seconds = timer.seconds.toString().padStart(2, "0");

  return (
    <p className="text-center text-6xl font-bold">
      <span>{minutes}</span>:<span>{seconds}</span>
    </p>
  );
}

export default Dial;
