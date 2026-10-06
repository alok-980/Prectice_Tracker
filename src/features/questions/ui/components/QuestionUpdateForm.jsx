import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useQuestionForm } from "../../hooks/useQuestionForm";

const QuestionUpdateForm = () => {
  const { id } = useParams();

  const {
    navigate,
    questions,
    register,
    handleSubmit,
    errors,
    reset,
    questionUpdate,
    CATEGORIES,
    DIFFICULTIES,
    STATUSES,
  } = useQuestionForm();

  const question = questions.find((question) => question.id === Number(id));

  useEffect(() => {
    if (question) {
      reset({
        title: question.title,
        category: question.category,
        difficulty: question.difficulty,
        status: question.status,
      });
    }
  }, [question, reset]);

  const onSubmit = (data) => {
    questionUpdate(question.id, data);
    navigate("/question");
  };

  if (!question) {
    return <p>Question not found.</p>;
  }

  return (
    <div>
      <h1>Update Question</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="title">Title</label>
          <div>
            <input
              id="title"
              type="text"
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
          {errors.title && <p>{errors.title.message}</p>}
        </div>

        <div>
          <label htmlFor="category">Category</label>
          <div>
            <select
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
          {errors.category && <p>{errors.category.message}</p>}
        </div>

        <div>
          <label htmlFor="difficulty">Difficulty</label>
          <div>
            <select
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
          {errors.difficulty && <p>{errors.difficulty.message}</p>}
        </div>

        <div>
          <label htmlFor="status">Status</label>
          <div>
            <select
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
          {errors.status && <p>{errors.status.message}</p>}
        </div>

        <button type="submit">Update Question</button>
        <button type="button" onClick={() => navigate("/question")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default QuestionUpdateForm;
