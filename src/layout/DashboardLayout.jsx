import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import AsideNav from "../shared/ui/components/AsideNav";
import TopNav from "../shared/ui/components/TopNav";

const DashboardLayout = () => {
  // drawer state for mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { pathname } = useLocation();

  // close the drawer after navigating
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="h-dvh overflow-hidden p-3 md:p-4 grid gap-4 md:grid-cols-[16rem_1fr]">
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        className={`fixed inset-y-3 left-3 z-50 w-64 overflow-y-auto rounded-card border border-border bg-surface shadow-pop transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-[120%]"
        } md:static md:z-auto md:w-auto md:translate-x-0 md:shadow-soft`}
      >
        <AsideNav />
      </aside>

      <div className="flex h-full min-w-0 flex-col gap-3 overflow-hidden md:gap-4">
        <header className="flex items-center gap-3 rounded-card border border-border bg-surface px-3 py-3 shadow-soft md:px-5">
          <button
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open menu"
            className="grid size-10 shrink-0 place-items-center rounded-pill bg-primary-soft text-xl text-primary-dark transition hover:bg-primary hover:text-white md:hidden"
          >
            ☰
          </button>
          <div className="min-w-0 flex-1">
            <TopNav />
          </div>
        </header>

        <main className="flex-1 overflow-y-auto px-2 pb-6 pt-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
