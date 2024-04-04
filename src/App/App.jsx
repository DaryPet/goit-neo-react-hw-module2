import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notifications from "../Notifications/Notifications";

export default function App() {
  const [feedbackCounts, setFeedbackCounts] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-clicks");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;

  const positivePercent = Math.round(
    (feedbackCounts.good / totalFeedback) * 100
  );

  const resetFeedback = () => {
    setFeedbackCounts({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          value={feedbackCounts}
          totalFeedback={totalFeedback}
          positivePercent={positivePercent}
        />
      ) : (
        <Notifications />
      )}
      {/* <Feedback feedbackCounts={feedbackCounts} /> */}
      {/* <Notifications total={totalFeedback} /> */}
    </>
  );
}
