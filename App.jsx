import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CommitteePage from "./pages/CommitteePage.jsx";
import LoginGate from "./components/LoginGate.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<LoginGate code="123456789"><AdminPage /></LoginGate>} />
        <Route path="/committee/:name" element={<LoginGate isCommittee={true}><CommitteePage /></LoginGate>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
