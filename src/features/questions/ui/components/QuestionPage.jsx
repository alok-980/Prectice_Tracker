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
    <div>
      <h1>QuestionPage</h1>
      <button onClick={() => navigate("/question/add")}>Add Question</button>

      <FilterBar
        search={search}
        onSearchChange={setSearch}
        filters={filters}
        onFilterChange={handleFilterChange}
        onClear={clearFilters}
      />

      <p>
        Showing {filteredQuestions.length} of {questions.length} questions
      </p>

      <div>
        {questions.length > 0 && filteredQuestions.length === 0 ? (
          <p>No questions found.</p>
        ) : (
          <QuestionTable
            questions={filteredQuestions}
            questionUpdate={questionUpdate}
            questionDelete={questionDelete}
          />
        )}
      </div>
    </div>
  );
};

export default QuestionPage;
