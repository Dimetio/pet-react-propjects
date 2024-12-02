import { Section } from "../../components";

import SimpleCounter from "./01-simple-example";
import ReduxCounter from "./03-redux-example";

import ContextCounter from "./02-context-example";

/** Общий компонент для счетчика в разных реализациях */
function Counter() {
  return (
    <Section title="Counter">
      <div className="grid grid-cols-3 gap-x-10">
        <SimpleCounter />
        <ContextCounter />
        <ReduxCounter />
      </div>
    </Section>
  );
}

export default Counter;
