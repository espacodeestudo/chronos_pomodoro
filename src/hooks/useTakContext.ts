import { useContext } from "react";

import { TaskContext } from "../context";

function UseTakContext() {
  return useContext(TaskContext);
}

export { UseTakContext };
