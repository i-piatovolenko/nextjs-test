"use client";

import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store";
import LegacyRoutes from "./LegacyRoutes";
import LegacyShell from "./LegacyShell";

export default function LegacyApp() {
  return (
    <Provider store={store}>
      {/* Legacy SPA is kept intact and mounted under /legacy */}
      <BrowserRouter basename="/legacy">
        <LegacyShell>
          <LegacyRoutes />
        </LegacyShell>
      </BrowserRouter>
    </Provider>
  );
}
