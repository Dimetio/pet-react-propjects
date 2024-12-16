interface ITimer {
  minutes: string;
  seconds: string;
  timeLeft: number;
}

export interface IDial {
  timer: ITimer;
  timerStart: boolean;
  onClick: () => void;
  onReset: () => void;
}

export interface ITimerContext {
  showForm: boolean;
  timer: ITimer;
  timerStart: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
  onClick: () => void;
}
