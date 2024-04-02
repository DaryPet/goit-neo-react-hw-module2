import { useState } from "react";

import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";

export default function App() {
  const [feedbackCounts, setFeedbackCounts] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const updateFeedback = (feedbackType) => {
    setFeedbackCounts((prevCounts) => ({
      ...prevCounts,
      [feedbackType]: prevCounts[feedbackType] + 1,
    }));
  };

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} />
      <Feedback feedbackCounts={feedbackCounts} />
    </>
  );
}
