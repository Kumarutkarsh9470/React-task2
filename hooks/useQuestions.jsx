import { useState, useEffect } from "react";

function useQuestions() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then((res) => {
        if (!res.ok) throw new Error("Could not fetch questions");
        return res.json();
      })
      .then((json) => {
        setData(json);
        setIsPending(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  return { data, isPending, error };
}

export default useQuestions;
