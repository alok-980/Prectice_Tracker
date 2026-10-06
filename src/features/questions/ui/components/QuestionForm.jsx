import React from "react";
import { useQuestionForm } from "../../hooks/useQuestionForm";

const fieldStyle =
  "w-full rounded-input border-2 bg-surface-soft px-4 py-3 text-sm font-bold text-ink outline-none transition focus:bg-white";

const getFieldStyle = (hasError) =>
  `${fieldStyle} ${hasError ? "border-coral" : "border-border focus:border-primary"}`;

const labelStyle = "mb-1.5 block text-sm font-bold text-ink";
const errorStyle =
  "mt-1.5 flex items-center gap-1 text-xs font-bold text-coral-ink";

const QuestionForm = () => {
  const {
    navigate,
    register,
    handleSubmit,
    errors,
    reset,
    questionSubmit,
    CATEGORIES,
    DIFFICULTIES,
    STATUSES,
  } = useQuestionForm();

  return (
    <div className="mx-auto w-full rounded-hero border border-border bg-surface p-5 shadow-soft md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid size-12 shrink-0 place-items-center rounded-input bg-linear-to-br from-primary to-pink text-2xl shadow-soft">
          ✨
        </span>
        <div>
          <h1 className="text-2xl text-ink">Add New Question</h1>
          <p className="text-sm font-semibold text-muted">
            Add a new question and start tracking it
          </p>
        </div>
      </div>

      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(questionSubmit)}
        noValidate
      >
        <div>
          <label className={labelStyle} htmlFor="title">
            📌 Title
          </label>
          <div>
            <input
              className={getFieldStyle(errors.title)}
              id="title"
              type="text"
              placeholder="e.g. Reverse a linked list"
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 3,
                  message: "Title must be at least 3 characters",
                },
                validate: (value) =>
                  value.trim().length >= 3 || "Title cannot be only spaces",
              })}
            />
          </div>
          {errors.title && (
            <p className={errorStyle}>⚠️ {errors.title.message}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelStyle} htmlFor="category">
              🗂️ Category
            </label>
            <div>
              <select
                className={`${getFieldStyle(errors.category)} cursor-pointer`}
                id="category"
                {...register("category", { required: "Category is required" })}
              >
                <option value="">Select category</option>
                {CATEGORIES.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.category && (
              <p className={errorStyle}>⚠️ {errors.category.message}</p>
            )}
          </div>

          <div>
            <label className={labelStyle} htmlFor="difficulty">
              🔥 Difficulty
            </label>
            <div>
              <select
                className={`${getFieldStyle(errors.difficulty)} cursor-pointer`}
                id="difficulty"
                {...register("difficulty", {
                  required: "Difficulty is required",
                })}
              >
                <option value="">Select difficulty</option>
                {DIFFICULTIES.map((item, idx) => (
                  <option key={idx} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {errors.difficulty && (
              <p className={errorStyle}>⚠️ {errors.difficulty.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className={labelStyle} htmlFor="status">
            🚦 Status
          </label>
          <div>
            <select
              className={`${getFieldStyle(errors.status)} cursor-pointer`}
              id="status"
              {...register("status", { required: "Status is required" })}
            >
              {STATUSES.map((item, idx) => (
                <option key={idx} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          {errors.status && (
            <p className={errorStyle}>⚠️ {errors.status.message}</p>
          )}
        </div>

        <div className="mt-2 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            className="rounded-pill border-2 border-border bg-surface px-6 py-3 text-sm font-bold text-muted transition hover:border-coral hover:text-coral-ink md:text-base"
            type="button"
            onClick={() => {
              reset();
              navigate("/question");
            }}
          >
            Cancel
          </button>
          <button
            className="flex items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3 text-sm font-bold text-white shadow-press transition hover:bg-primary-dark active:translate-y-0.5 active:shadow-none md:text-base"
            type="submit"
          >
            <span className="text-xl leading-none">+</span> Add Question
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuestionForm;
