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
        icon="🏆"
        cardStyle="bg-mint-soft"
        barStyle="bg-linear-to-r from-mint to-sky"
        valueStyle="text-mint-ink"
        big
      />
    </div>
  );
};

export default OverAllProgress;