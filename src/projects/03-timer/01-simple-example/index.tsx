import { ContentWrapper } from "../../../components";
import { Dial, Form } from "./components";

import useActions from "../shared/hooks/useActions";

function SimpleTimer() {
  const { showForm, timer, timerStart, onSubmit, onReset, onClick } = useActions();

  return (
    <ContentWrapper title="Simple Timer">
      {showForm ? (
        <Form onSubmit={onSubmit} />
      ) : (
        <Dial {...{ timer, timerStart, onClick, onReset }} />
      )}
    </ContentWrapper>
  );
}

export default SimpleTimer;
