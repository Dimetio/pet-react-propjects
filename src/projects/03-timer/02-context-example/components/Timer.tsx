import { ContentWrapper } from "../../../../components";

import { Form, Dial } from ".";

import useTimerContext from "../hook/useTimerContext";

function Timer() {
  const { showForm } = useTimerContext();

  return <ContentWrapper title="Context Timer">{showForm ? <Form /> : <Dial />}</ContentWrapper>;
}

export default Timer;
