import React from "react";
import ProgressBar from "../components/ProgressBar";

const TechnicalProgress = ({
  technicalProgress,
  totalTechnicalQuestion,
  technicalCompletedQuestion,
}) => {
  return (
    <div>
      <ProgressBar
        label="Technical"
        value={technicalProgress}
        totaQuestion={totalTechnicalQuestion}
        totalCompletedQuestion={technicalCompletedQuestion}
        icon="💻"
        cardStyle="bg-sky-soft"
        barStyle="bg-sky"
        valueStyle="text-sky-ink"
      />
    </div>
  );
};

export default TechnicalProgress;
