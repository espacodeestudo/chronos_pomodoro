import React, { useState } from "react";
import { initialState } from "./initialstate";
import { TaskContext } from "./taskContext";

interface TaskProviderProps {
  children: React.ReactNode;
}

function TaskContextProvider({ children }: TaskProviderProps) {
  const [state, setState] = useState(initialState);
  return (
    <React.Fragment>
      <TaskContext.Provider value={{ setState, state }}>
        {children}
      </TaskContext.Provider>
    </React.Fragment>
  );
}

export { TaskContextProvider };
