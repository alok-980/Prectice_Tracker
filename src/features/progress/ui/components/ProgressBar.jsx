const ProgressBar = ({
  label,
  value,
  totaQuestion = 0,
  totalCompletedQuestion = 0,
  icon = "📈",
  cardStyle = "bg-primary-soft",
  barStyle = "bg-primary",
  valueStyle = "text-primary-dark",
  big = false,
}) => (
  <div className={`rounded-card p-4 shadow-soft md:p-5 ${cardStyle}`}>
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-input bg-white text-2xl shadow-soft">
          {icon}
        </span>
        <h3 className="truncate text-lg text-ink">
          {label} {value === 100 && "🎉"}
        </h3>
      </div>
      <p
        className={`font-display font-semibold ${valueStyle} ${big ? "text-4xl md:text-5xl" : "text-3xl"}`}
      >
        {value}%
      </p>
    </div>

    <div
      className={`mt-4 w-full overflow-hidden rounded-pill bg-white ${big ? "h-6" : "h-4"}`}
    >
      <div
        className={`h-full rounded-pill transition-all duration-700 ${barStyle}`}
        style={{ width: `${value}%` }}
      />
    </div>

    <p className="mt-2 text-right text-sm font-bold text-muted">
      {totalCompletedQuestion} / {totaQuestion} completed
    </p>
  </div>
);

export default ProgressBar;
