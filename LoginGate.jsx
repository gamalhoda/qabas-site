import React, { useState } from "react";

export default function LoginGate({ children, code = "", isCommittee = false }) {
  const [input, setInput] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const validCodes = {
    tq: "TQ2025",
    dw: "DW2025",
    design: "DS2025",
    general: "GN2025"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCommittee) {
      const pathname = window.location.pathname.split("/").pop();
      if (input === validCodes[pathname]) setUnlocked(true);
    } else {
      if (input === code) setUnlocked(true);
    }
  };

  if (unlocked) return <>{children}</>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4 text-center">أدخل رمز الدخول</h2>
        <input
          type="text"
          placeholder="رمز اللجنة أو الإدارة"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          دخول
        </button>
      </form>
    </div>
  );
}
