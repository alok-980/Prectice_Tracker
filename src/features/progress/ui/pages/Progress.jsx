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
    <div className="flex flex-col gap-4 md:gap-6">
      <div>
        <h1 className="text-2xl text-ink md:text-3xl">Your Progress 🎯</h1>
        <p className="text-sm font-semibold text-muted">
          See how much you've covered and what's left 💪
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
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
