import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { login, logout } from "./authSlice";
import type { RootState, AppDispatch } from "./store";

type LegacyShellProps = {
  children: ReactNode;
};

export default function LegacyShell({ children }: LegacyShellProps) {
  const dispatch = useDispatch<AppDispatch>();
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);

  return (
    <div style={{ border: "1px solid #ddd", padding: "12px" }}>
      <div style={{ marginBottom: "12px" }}>
        <strong>Legacy React Shell</strong>
        <div style={{ marginTop: "8px", display: "flex", gap: "12px" }}>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contacts">Contacts</Link>
          <Link to="/mails?folder=inbox&unread=true">Mails</Link>
        </div>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <span>Auth state: {loggedIn ? "Logged in" : "Logged out"}</span>
        <button
          style={{ marginLeft: "8px" }}
          onClick={() => dispatch(loggedIn ? logout() : login())}
        >
          {loggedIn ? "Logout" : "Login"}
        </button>
      </div>

      {children}
    </div>
  );
}
