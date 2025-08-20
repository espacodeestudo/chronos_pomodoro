import React, { createContext } from "react";
import type { TaskStateModel } from "../models";
import { initialState } from "./initialstate";

type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export const TaskContext = createContext<TaskContextProps>({
  setState: () => {},
  state: initialState,
});
