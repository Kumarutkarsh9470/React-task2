import React from "react";
import { useParams } from "react-router-dom";
import useQuestions from "../hooks/useQuestions";

function ProblemView() {
  const { id } = useParams();
  const { data, isPending, error } = useQuestions();

  if (isPending) return <div>Loading…</div>;
  if (error) return <div>Error: {error}</div>;

  const q = data.find((item) => item.ID === id);

  if (!q) return <div>Question not found</div>;

  return (
    <div>
      <h1>{q.title}</h1>
      <p>{q.description}</p>
      <h3>Test Cases</h3>
      <ul>
        {q.test_cases.map((tc, i) => (
          <li key={i}>{tc}</li>
        ))}
      </ul>
      <h3>Expected Output</h3>
      <ul>
        {q.output.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProblemView;
