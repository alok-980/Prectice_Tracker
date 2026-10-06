import React from "react";
import { useQuestionForm } from "../../hooks/useQuestionForm";

const QuestionForm = () => {
  

  const { navigate, register, handleSubmit, errors, reset, questionSubmit, CATEGORIES, DIFFICULTIES, STATUSES } = useQuestionForm();

  return (
    <div>
      <h1>Questions</h1>
      <form onSubmit={handleSubmit(questionSubmit)} noValidate>
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

        <button type="submit">Add Question</button>
        <button onClick={() => {
            reset(),
            navigate('/question')
        }}>Cancle</button>
      </form>
    </div>
  );
};

export default QuestionForm;
