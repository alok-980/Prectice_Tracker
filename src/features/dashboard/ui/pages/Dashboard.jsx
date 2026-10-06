import React from "react";
import { useQuestionForm } from "../../../questions/hooks/useQuestionForm";
import { useProgress } from "../../../progress/hooks/useProgress";
import { useMachineStatus } from "../../hooks/useMachineStatus";

const Dashboard = () => {
  const { questions } = useQuestionForm();

  const { totalQuestion, dsaCompletedQuestion, interviewCompletedQuestion } = useProgress(questions);

  const { machineStatus, handleMechineStatus, MACHINE_STATUS } = useMachineStatus();

  return (
    <div>
      <h1>Dashboard</h1>

      <div>
        <h3>Total Questions</h3>
        <p>{totalQuestion}</p>
      </div>

      <div>
        <h3>Completed DSA Problems</h3>
        <p>{dsaCompletedQuestion}</p>
      </div>

      <div>
        <h3>Completed Interview Questions</h3>
        <p>{interviewCompletedQuestion}</p>
      </div>

      <div>
        <h3>Machine Coding Status</h3>
        <select
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
  );
};

export default Dashboard;
