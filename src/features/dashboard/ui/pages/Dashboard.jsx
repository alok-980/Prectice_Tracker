import React from "react";
import { useQuestionForm } from "../../../questions/hooks/useQuestionForm";
import { useProgress } from "../../../progress/hooks/useProgress";
import { useMachineStatus } from "../../hooks/useMachineStatus";

const machineStatusEmoji = {
  "Not Started": "😴",
  "In Progress": "🚧",
  Completed: "🏆",
};

const Dashboard = () => {
  const { questions } = useQuestionForm();

  const { totalQuestion, dsaCompletedQuestion, interviewCompletedQuestion } =
    useProgress(questions);

  const { machineStatus, handleMechineStatus, MACHINE_STATUS } =
    useMachineStatus();

  const statCards = [
    {
      title: "Total Questions",
      value: totalQuestion,
      icon: "📚",
      cardStyle: "bg-primary-soft",
      valueStyle: "text-primary-dark",
    },
    {
      title: "Completed DSA Problems",
      value: dsaCompletedQuestion,
      icon: "🧩",
      cardStyle: "bg-pink-soft",
      valueStyle: "text-pink-ink",
    },
    {
      title: "Completed Interview Questions",
      value: interviewCompletedQuestion,
      icon: "🎤",
      cardStyle: "bg-mint-soft",
      valueStyle: "text-mint-ink",
    },
  ];

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <div className="relative overflow-hidden rounded-hero bg-linear-to-br from-primary/90 to-pink/90 p-5 text-white shadow-pop md:p-8">
        <h1 className="text-3xl md:text-4xl">Hey Coder! 👋</h1>
        <p className="mt-2 max-w-md text-sm font-semibold text-white md:text-base">
          Let's start today's interview prep, one question at a time 🔥
        </p>
        <span className="pointer-events-none absolute -bottom-4 right-4 text-7xl opacity-30 md:text-9xl">
          🚀
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-4">
        {statCards.map((card) => (
          <div
            key={card.title}
            className={`flex flex-col justify-between gap-4 rounded-card p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-pop md:p-5 ${card.cardStyle}`}
          >
            <span className="grid size-11 place-items-center rounded-input bg-white text-2xl shadow-soft">
              {card.icon}
            </span>
            <div>
              <p
                className={`font-display text-4xl font-semibold md:text-5xl ${card.valueStyle}`}
              >
                {card.value}
              </p>
              <h3 className="mt-1 text-sm text-ink md:text-base">
                {card.title}
              </h3>
            </div>
          </div>
        ))}

        {/* separate card because it needs a select */}
        <div className="col-span-2 flex flex-col justify-between gap-4 rounded-card bg-sunny-soft p-4 shadow-soft transition hover:-translate-y-1 hover:shadow-pop md:p-5 lg:col-span-1">
          <span className="grid size-11 place-items-center rounded-input bg-white text-2xl shadow-soft">
            {machineStatusEmoji[machineStatus] || "💻"}
          </span>
          <div>
            <h3 className="mb-2 text-sm text-ink md:text-base">
              Machine Coding Status
            </h3>
            <select
              className="w-full cursor-pointer rounded-pill border-2 border-sunny bg-white px-4 py-2 text-sm font-bold text-ink outline-none transition focus:border-orange"
              value={machineStatus}
              onChange={(e) => handleMechineStatus(e.target.value)}
            >
              {MACHINE_STATUS.map((status, idx) => (
                <option key={idx} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
