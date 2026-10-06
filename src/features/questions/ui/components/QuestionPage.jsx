import React from "react";
import { useQuestionForm } from "../../hooks/useQuestionForm";
import { useFilter } from "../../hooks/useFilter";
import QuestionTable from "./QuestionTable";
import FilterBar from "./FilterBar";

const QuestionPage = () => {
  const { navigate, questions, questionUpdate, questionDelete } =
    useQuestionForm();

  const {
    search,
    setSearch,
    filters,
    handleFilterChange,
    clearFilters,
    filteredQuestions,
  } = useFilter(questions);

  return (
    <div className="flex flex-col gap-4 md:gap-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl text-ink md:text-3xl">Your Questions 📝</h1>
          <p className="text-sm font-semibold text-muted">
            Add, filter and complete them one by one ✅
          </p>
        </div>
        <button
          onClick={() => navigate("/question/add")}
          className="flex w-full items-center justify-center gap-2 rounded-pill bg-primary px-6 py-3 text-sm font-bold text-white shadow-press transition hover:bg-primary-dark active:translate-y-0.5 active:shadow-none sm:w-auto md:text-base"
        >
          <span className="text-xl leading-none">+</span> Add Question
        </button>
      </div>

      <div className="rounded-card border border-border bg-surface p-3 shadow-soft md:p-4">
        <FilterBar
          search={search}
          onSearchChange={setSearch}
          filters={filters}
          onFilterChange={handleFilterChange}
          onClear={clearFilters}
        />
      </div>

      <p className="px-1 text-sm font-bold text-muted">
        Showing{" "}
        <span className="text-primary-dark">{filteredQuestions.length}</span> of{" "}
        {questions.length} questions
      </p>

      <div>
        {questions.length > 0 && filteredQuestions.length === 0 ? (
          <div className="flex flex-col items-center gap-2 rounded-card border-2 border-dashed border-border bg-surface px-4 py-10 text-center">
            <p className="text-5xl">🔍</p>
            <p className="font-display text-xl font-semibold text-ink">
              No questions found
            </p>
            <p className="text-sm font-semibold text-muted">
              Try a different search or filter
            </p>
            <button
              onClick={clearFilters}
              className="mt-2 rounded-pill bg-primary-soft px-5 py-2 text-sm font-bold text-primary-dark transition hover:bg-primary hover:text-white"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          // scrolls sideways on small screens
          <div className="overflow-x-auto rounded-card border border-border bg-surface shadow-soft">
            <QuestionTable
              questions={filteredQuestions}
              questionUpdate={questionUpdate}
              questionDelete={questionDelete}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
