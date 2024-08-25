import { useEffect, useState } from "react";

import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useQuestion(videoID) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [questions, setQuistions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoID + "/questions");
      const quizQuery = query(quizRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(quizQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setQuistions(Object.values(snapshot.val()));
        } else {
          setError(true);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
}
