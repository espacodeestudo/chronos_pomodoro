import { BrowserRouter, Route, Routes } from "react-router-dom";

import { History, Home, NotFound, Settings } from "../pages";
import { MainTamplate } from "../template";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainTamplate />}>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { Router };
