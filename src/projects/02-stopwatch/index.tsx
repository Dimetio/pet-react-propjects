import { Section } from "../../components";

import SimpleStopWatch from "./01-simple-example";

import ContextStopWatch from "./02-context-example";

function Stopwatch() {
  return (
    <Section title="StopWatch">
      <div className="grid grid-cols-2 gap-x-10">
        <SimpleStopWatch />

        <ContextStopWatch />
      </div>
    </Section>
  );
}

export default Stopwatch;
