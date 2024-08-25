import { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";

import { get, getDatabase, orderByKey, query, ref } from "firebase/database";

export default function useResult(videoID) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);

  const { currentUser } = useAuth();
  const { uid } = currentUser;

  useEffect(() => {
    async function fetchQuestions() {
      const db = getDatabase();
      const resultRef = ref(db, `result/${uid}/${videoID}`);
      const resultQuery = query(resultRef, orderByKey());

      try {
        setError(false);
        setLoading(true);

        const snapshot = await get(resultQuery);
        setLoading(false);

        if (snapshot.exists()) {
          setResult(Object.values(snapshot.val()));
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
  }, [videoID, uid]);

  return {
    loading,
    error,
    result,
  };
}
