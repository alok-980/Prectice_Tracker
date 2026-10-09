import React from "react";
import { useNavigate } from "react-router";

const badgeStyle =
  "inline-flex items-center gap-1 whitespace-nowrap rounded-pill px-3 py-1 text-xs font-bold";

const categoryStyle = {
  DSA: { color: "bg-primary-soft text-primary-dark", icon: "🧩" },
  Git: { color: "bg-orange-soft text-orange-ink", icon: "🐱" },
  Technical: { color: "bg-sky-soft text-sky-ink", icon: "💻" },
};

const difficultyStyle = {
  Easy: { color: "bg-mint-soft text-mint-ink", icon: "😊" },
  Medium: { color: "bg-sunny-soft text-ink", icon: "⚡" },
  Hard: { color: "bg-coral-soft text-coral-ink", icon: "🔥" },
};

const statusStyle = {
  Pending: { color: "bg-sunny-soft text-ink", icon: "⏳" },
  "In Progress": { color: "bg-sky-soft text-sky-ink", icon: "🚧" },
  Completed: { color: "bg-mint-soft text-mint-ink", icon: "✅" },
};

const QuestionTable = ({ questions, questionUpdate, questionDelete }) => {
  const navigate = useNavigate();

  if (questions.length === 0) {
    return (
      <div className="flex flex-col items-center gap-2 px-4 py-12 text-center">
        <p className="text-5xl">📭</p>
        <p className="font-display text-xl font-semibold text-ink">
          No questions added yet
        </p>
        <p className="text-sm font-semibold text-muted">
          Click "Add Question" above to get started 🚀
        </p>
      </div>
    );
  }

  return (
    <table className="w-full min-w-[720px] text-left text-sm">
      <thead className="bg-surface-soft text-xs uppercase tracking-wider text-muted">
        <tr>
          <th className="px-4 py-3 font-bold">#</th>
          <th className="px-4 py-3 font-bold">Title</th>
          <th className="px-4 py-3 font-bold">Category</th>
          <th className="px-4 py-3 font-bold">Difficulty</th>
          <th className="px-4 py-3 font-bold">Status</th>
          <th className="px-4 py-3 font-bold">Created</th>
          <th className="px-4 py-3 font-bold">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-border">
        {questions.map((question, index) => (
          <tr key={question.id} className="transition hover:bg-surface-soft">
            <td className="px-4 py-3 font-bold text-muted">{index + 1}</td>

            <td className="max-w-xs px-4 py-3 font-bold text-ink">
              {question.title}
            </td>

            <td className="px-4 py-3">
              <span
                className={`${badgeStyle} ${categoryStyle[question.category]?.color}`}
              >
                {categoryStyle[question.category]?.icon} {question.category}
              </span>
            </td>

            <td className="px-4 py-3">
              <span
                className={`${badgeStyle} ${difficultyStyle[question.difficulty]?.color}`}
              >
                {difficultyStyle[question.difficulty]?.icon}{" "}
                {question.difficulty}
              </span>
            </td>

            <td className="px-4 py-3">
              <span
                className={`${badgeStyle} ${statusStyle[question.status]?.color}`}
              >
                {statusStyle[question.status]?.icon} {question.status}
              </span>
            </td>

            <td className="whitespace-nowrap px-4 py-3 font-semibold text-muted">
              {new Date(question.createdAt).toLocaleDateString()}
            </td>

            <td className="px-4 py-3">
              <div className="flex gap-2">
                <button
                  className="whitespace-nowrap rounded-pill bg-primary-soft px-3 py-1.5 text-xs font-bold text-primary-dark transition hover:bg-primary hover:text-white"
                  onClick={() => {
                    navigate(`/question/update/${question.id}`);
                  }}
                >
                  ✏️ Edit
                </button>
                <button
                  className="whitespace-nowrap rounded-pill bg-coral-soft px-3 py-1.5 text-xs font-bold text-coral-ink transition hover:bg-coral-ink hover:text-white"
                  onClick={() => questionDelete(question.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuestionTable;
