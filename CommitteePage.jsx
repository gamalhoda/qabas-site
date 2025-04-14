import React from "react";
import { useParams } from "react-router-dom";

const committeeNames = {
  tq: "لجنة دروس التقوية",
  dw: "اللجنة الدعوية",
  design: "لجنة التصميم",
  general: "اللجنة العامة"
};

export default function CommitteePage() {
  const { name } = useParams();
  const title = committeeNames[name] || "لجنة غير معروفة";

  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <h1 className="text-3xl font-bold text-center text-yellow-800 mb-6">{title}</h1>
      <p className="text-center text-gray-700">صفحة خاصة بأعمال اللجنة، جدول المهام، ورفع التقارير.</p>
    </div>
  );
}
