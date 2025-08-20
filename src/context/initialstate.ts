import type { TaskStateModel } from "../models";

export const initialState: TaskStateModel = {
  activeTask: null,
  config: {
    longBreakTime: 15,
    shortBreakTime: 5,
    workTime: 25,
  },
  currentCycle: 0,
  formattedSecondsRemaining: "00:00",
  secondsRemaining: 0,
  tasks: [],
};
