import React from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white p-6 text-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">كتلة قبس الطلابية</h1>
      <p className="mb-6">مرحبًا بكم في الموقع الرسمي لكتلة قبس!</p>

      <nav className="flex flex-col gap-4">
        <Link to="/admin" className="text-yellow-600 underline">صفحة الإدارة</Link>
        <Link to="/committee/tq" className="text-blue-600 underline">لجنة دروس التقوية</Link>
        <Link to="/committee/dw" className="text-blue-600 underline">اللجنة الدعوية</Link>
        <Link to="/committee/design" className="text-blue-600 underline">لجنة التصميم</Link>
        <Link to="/committee/general" className="text-blue-600 underline">اللجنة العامة</Link>
      </nav>
    </div>
  );
}
