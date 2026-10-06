const ProgressBar = ({
  label,
  value,
  totaQuestion = 0,
  totalCompletedQuestion = 0,
}) => (
  <div>
    <div className="flex justify-between">
      <p>
        {label}: {value}%
      </p>
      <p>
        {totalCompletedQuestion} / {totaQuestion}
      </p>
    </div>
    <progress value={value} max="100" />
  </div>
);

export default ProgressBar;
