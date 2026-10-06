import React from "react";
import ProgressBar from "../components/ProgressBar";

const GitProgress = ({
  gitProgress,
  totalGitQuestion,
  gitCompletedQuestion,
}) => {
  return (
    <div>
      <ProgressBar
        label="Git"
        value={gitProgress}
        totaQuestion={totalGitQuestion}
        totalCompletedQuestion={gitCompletedQuestion}
        icon="🌿"
        cardStyle="bg-orange-soft"
        barStyle="bg-orange"
        valueStyle="text-orange-ink"
      />
    </div>
  );
};

export default GitProgress;
