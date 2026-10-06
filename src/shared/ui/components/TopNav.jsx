import React from "react";
import { useLocation } from "react-router";

const pageTitles = [
  { path: "/dashboard", title: "Dashboard", icon: "📊" },
  { path: "/question", title: "Questions", icon: "📝" },
  { path: "/progress", title: "Progress", icon: "🎯" },
];

const TopNav = () => {
  const { pathname } = useLocation();

  // startsWith so nested routes like /question/add also match
  const currentPage = pageTitles.find((page) => pathname.startsWith(page.path));

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <span className="hidden size-10 shrink-0 place-items-center rounded-input bg-primary-soft text-xl sm:grid">
          {currentPage ? currentPage.icon : "🚀"}
        </span>
        <div className="min-w-0 leading-tight">
          <h2 className="truncate text-lg text-ink md:text-xl">
            {currentPage ? currentPage.title : "Practice Tracker"}
          </h2>
          <p className="truncate text-xs font-semibold text-muted">
            Welcome back 👋
          </p>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <span className="hidden items-center gap-2 rounded-pill bg-sky-soft px-4 py-2 text-sm font-bold text-sky-ink sm:flex">
          📅 {today}
        </span>
        <div className="grid size-10 place-items-center rounded-pill bg-linear-to-br from-mint/80 to-mint-soft/80 text-xl shadow-soft">
          🧑‍💻
        </div>
      </div>
    </div>
  );
};

export default TopNav;
