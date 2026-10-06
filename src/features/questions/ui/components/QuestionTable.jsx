import React from "react";
import { useNavigate } from "react-router";

const QuestionTable = ({ questions, questionUpdate, questionDelete }) => {
  const navigate = useNavigate();

  if (questions.length === 0) {
    return <p>No questions added yet.</p>;
  }

  return (
    <table border="1">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Difficulty</th>
          <th>Status</th>
          <th>Created</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((question, index) => (
          <tr key={question.id}>
            <td>{index + 1}</td>
            <td>{question.title}</td>
            <td>{question.category}</td>
            <td>{question.difficulty}</td>
            <td>{question.status}</td>
            <td>{new Date(question.createdAt).toLocaleDateString()}</td>
            <td>
              <button
                onClick={() => {
                  (navigate(`/question/update/${question.id}`));
                }}
              >
                Edit
              </button>
              <button onClick={() => questionDelete(question.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuestionTable;
