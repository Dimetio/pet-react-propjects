import Timer from "./components/Timer";

import TimerProvider from "./context/Provider";

function ContextTimer() {
  return (
    <TimerProvider>
      <Timer />
    </TimerProvider>
  );
}

export default ContextTimer;
