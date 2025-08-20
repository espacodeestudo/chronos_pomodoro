import React from "react";

import { TaskContextProvider } from "./context";

import { Router } from "./routers/router";

function App() {
  return (
    <React.Fragment>
      <TaskContextProvider>
        <Router />
      </TaskContextProvider>
    </React.Fragment>
  );
}

export default App;
