import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import type { RootState } from "./store";

type RequireAuthProps = {
  children: ReactNode;
};

export default function RequireAuth({ children }: RequireAuthProps) {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);

  if (!loggedIn) {
    // Legacy auth guard uses React Router redirection.
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
}
