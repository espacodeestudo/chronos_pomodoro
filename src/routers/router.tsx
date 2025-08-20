import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AboutPomodoro, History, Home, NotFound, Settings } from "../pages";
import { MainTamplate } from "../template";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainTamplate />}>
          <Route path="/about" element={<AboutPomodoro />} />
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { Router };
