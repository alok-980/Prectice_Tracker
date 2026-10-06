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
        icon="🧩"
        cardStyle="bg-pink-soft"
        barStyle="bg-pink"
        valueStyle="text-pink-ink"
      />
    </div>
  );
};

export default DSA_Progress;
