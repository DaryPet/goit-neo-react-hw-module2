// import { useState } from "react";
import css from "./Feedback.module.css";

export default function Feedback({
  value: { good, neutral, bad },
  totalFeedback,
  positivePercent,
}) {
  return (
    <div>
      <p className={css.text}>Good:{good} </p>
      <p className={css.text}>Neutral:{neutral} </p>
      <p className={css.text}>Bad: {bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      <p className={css.text}>Positive: {positivePercent}%</p>
    </div>
  );
}
