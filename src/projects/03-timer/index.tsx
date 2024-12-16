import { Section } from "../../components";

import SimpleTimer from "./01-simple-example";

import ContextTimer from "./02-context-example";

function Timer() {
  return (
    <Section title="Timer">
      <div className="grid min-h-[252px] grid-cols-2 gap-x-10">
        <SimpleTimer />

        <ContextTimer />
      </div>
    </Section>
  );
}

export default Timer;
