import { useEffect, useState } from "react";

import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useAnswers(videoID) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      const db = getDatabase();
      const ansRef = ref(db, `answers/${videoID}/questions`);

      const ansQuery = query(ansRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(ansQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setAnswers(Object.values(snapshot.val()));
        } else {
          setError(true);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchAnswers();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
}
