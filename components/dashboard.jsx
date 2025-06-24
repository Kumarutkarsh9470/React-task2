import React from "react";
import { NavLink } from "react-router-dom";
import useQuestions from "../hooks/useQuestions";
import "./dashboard.css";
function Dashboard() {
  const { data, isPending, error } = useQuestions();

  if (isPending) return <div>Loading…</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="questions">
      {data.map((q) => (
        <NavLink key={q.ID} to={`/problem/${q.ID}`}>
          {q.title}
        </NavLink>
      ))}
    </div>
  );
}

export default Dashboard;
