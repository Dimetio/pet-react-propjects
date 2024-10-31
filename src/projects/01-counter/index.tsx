import { ContentWrapper } from "../components";
import SimpleCounter from "./01-simple-example";
import ContextCounter from "./02-context-example";
import ReduxCounter from "./03-redux-example";

/** Общий компонент для счетчика в разных реализациях */
function Counter() {
  return (
    <ContentWrapper title="Counter">
      <div className="grid grid-cols-3 gap-x-10">
        <SimpleCounter />
        <ContextCounter />
        <ReduxCounter />
      </div>
    </ContentWrapper>
  );
}

export default Counter;
