import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedDesk({ verifyCondition, children }) {
  if (!verifyCondition) {
    return <Navigate to="/connexion-admin" replace />;
  }
  return children;
}
