export default function Feedback({ feedbackCounts }) {
  return (
    <div>
      <p>Good:{feedbackCounts.good} </p>
      <p>Neutral:{feedbackCounts.neutral} </p>
      <p>Bad: {feedbackCounts.bad}</p>
    </div>
  );
}
