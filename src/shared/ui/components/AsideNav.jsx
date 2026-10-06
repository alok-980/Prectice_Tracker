import React from "react";
import { NavLink } from "react-router";

const navLinks = [
  { name: "Dashboard", path: "/dashboard", icon: "📊" },
  { name: "Questions", path: "/question", icon: "📝" },
  { name: "Progress", path: "/progress", icon: "🎯" },
];

const AsideNav = () => {
  return (
    <div className="flex min-h-full flex-col gap-6 p-4">
      <div className="flex items-center gap-3 px-2 pt-2">
        <div className="grid size-11 shrink-0 place-items-center rounded-input bg-linear-to-br from-primary/80 to-pink/80 text-2xl shadow-soft">
          🚀
        </div>
        <div className="leading-tight">
          <p className="font-display text-lg font-semibold text-ink">
            Practice Tracker
          </p>
          <p className="text-xs font-semibold text-muted">Interview prep ✨</p>
        </div>
      </div>

      <nav className="flex flex-col gap-2">
        <p className="px-3 text-xs font-bold uppercase tracking-wider text-muted">
          Menu
        </p>

        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-input px-4 py-3 text-base font-bold transition ${
                isActive
                  ? "bg-linear-to-br from-primary/90 to-pink/90 text-white shadow-soft"
                  : "text-muted hover:bg-primary-soft hover:text-primary-dark"
              }`
            }
          >
            <span className="text-xl">{link.icon}</span>
            {link.name}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-card bg-sunny-soft p-4 text-center">
        <p className="text-3xl">💪</p>
        <p className="mt-1 font-display text-base font-semibold text-ink">
          Keep going!
        </p>
        <p className="text-xs font-semibold text-muted">
          One question at a time. You will crack it.
        </p>
      </div>
    </div>
  );
};

export default AsideNav;
