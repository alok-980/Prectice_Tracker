import React from "react";
import DSA_Progress from "../components/DSA_Progress";
import GitProgress from "../components/GitProgress";
import TechnicalProgress from "../components/TechnicalProgress";
import OverAllProgress from "../components/OverAllProgress";
import { useProgress } from "../../hooks/useProgress";
import { useQuestionForm } from "../../../questions/hooks/useQuestionForm";

const Progress = () => {
  const { questions } = useQuestionForm();
  const {
    totalDSAQuestion,
    dsaCompletedQuestion,
    dsaProgress,

    totalGitQuestion,
    gitCompletedQuestion,
    gitProgress,

    totalTechnicalQuestion,
    technicalCompletedQuestion,
    technicalProgress,

    totalCompletedQuestion,
    overAllProgress,
  } = useProgress(questions);

  return (
    <div>
      <h1>Progress</h1>
      <div className="w-full flex justify-between">
        <DSA_Progress
          dsaProgress={dsaProgress}
          totalDSAQuestion={totalDSAQuestion}
          dsaCompletedQuestion={dsaCompletedQuestion}
        />
        <GitProgress
          gitProgress={gitProgress}
          totalGitQuestion={totalGitQuestion}
          gitCompletedQuestion={gitCompletedQuestion}
        />
        <TechnicalProgress
          technicalProgress={technicalProgress}
          totalTechnicalQuestion={totalTechnicalQuestion}
          technicalCompletedQuestion={technicalCompletedQuestion}
        />
      </div>
      <div>
        <OverAllProgress
          overAllProgress={overAllProgress}
          totalQuestion={questions.length}
          totalCompletedQuestion={totalCompletedQuestion}
        />
      </div>
    </div>
  );
};

export default Progress;
