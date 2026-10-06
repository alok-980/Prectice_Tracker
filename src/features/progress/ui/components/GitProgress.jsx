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
      />
    </div>
  );
};

export default GitProgress;
