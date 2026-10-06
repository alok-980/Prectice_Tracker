import React from "react";
import ProgressBar from "../components/ProgressBar";

const DSA_Progress = ({
  dsaProgress,
  totalDSAQuestion,
  dsaCompletedQuestion,
}) => {
  return (
    <div>
      <ProgressBar
        label="DSA"
        value={dsaProgress}
        totaQuestion={totalDSAQuestion}
        totalCompletedQuestion={dsaCompletedQuestion}
      />
    </div>
  );
};

export default DSA_Progress;
