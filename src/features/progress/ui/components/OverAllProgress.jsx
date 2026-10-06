import React from "react";
import ProgressBar from "../components/ProgressBar";

const OverAllProgress = ({
  overAllProgress,
  totalQuestion,
  totalCompletedQuestion,
}) => {
  return (
    <div>
      <ProgressBar
        label="Overall"
        value={overAllProgress}
        totaQuestion={totalQuestion}
        totalCompletedQuestion={totalCompletedQuestion}
      />
    </div>
  );
};

export default OverAllProgress;
