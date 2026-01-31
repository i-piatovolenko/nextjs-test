import { Navigate, Route, Routes } from "react-router-dom";

import RequireAuth from "./RequireAuth";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactsPage from "./pages/Contacts";
import MailsPage from "./pages/Mails";

export default function LegacyRoutes() {
  return (
    <Routes>
      {/* Legacy router continues to define its own pages under /legacy */}
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route
        path="/mails"
        element={
          <RequireAuth>
            <MailsPage />
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
