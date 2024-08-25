import Answers from "./Answers";
import MiniPlayer from "./MiniPlayer";
import ProgressBar from "./ProgressBar";

import useQuestion from "../../hooks/useQuestion";

import _ from "lodash";

import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

let initialstate = null;

function reducer(state, action) {
  switch (action.type) {
    case "setCheckeState": {
      action.value.forEach((question) => {
        question.options.forEach((option) => {
          option.checked = false;
        });
      });
      return action.value;
    }

    case "setAnswer": {
      let questions = _.cloneDeep(state);

      questions[action.questionID].options[action.optionIndex].checked =
        action.value;
      return questions;
    }
    default:
      return state;
  }
}

export default function Question() {
  const { currentUser } = useAuth();
  let navigate = useNavigate();
  let { id } = useParams();
  let { state: title } = useLocation();

  let { questions, loading, error } = useQuestion(id);

  let [quesCopy, dispatch] = useReducer(reducer, initialstate);
  // eslint-disable-next-line no-unused-vars
  let [currentQues, setCurrentQues] = useState(0);

  let total = questions.length;
  let percentage = Math.round(
    total > 0 ? ((currentQues + 1) / total) * 100 : 0
  );

  useEffect(() => {
    dispatch({
      type: "setCheckeState",
      value: questions,
    });
  }, [questions]);

  function handleAnswerChange(e, index) {
    dispatch({
      type: "setAnswer",
      value: e.target.checked,
      questionID: currentQues,
      optionIndex: index,
    });
  }

  function next() {
    if (currentQues + 1 < questions.length) {
      setCurrentQues((prevState) => prevState + 1);
    }
  }
  function prev() {
    if (currentQues > 0) {
      setCurrentQues((prevState) => prevState - 1);
    }
  }
  async function submit() {
    let { uid } = currentUser;
    const db = getDatabase();
    const resultRef = ref(db, `result/${uid}/${id}`);

    try {
      await set(resultRef, quesCopy);

      navigate(`/result/${id}`, {
        state: quesCopy,
      });
    } catch (err) {
      throw new Error(err);
    }
  }

  return (
    <>
      {loading && <h2>Loading...</h2>}
      {error && <h2 style={{ color: "red" }}>There was an error !</h2>}

      {!loading && !error && quesCopy && quesCopy.length > 0 && (
        <>
          <h1> {`#${currentQues + 1} ${quesCopy[currentQues].title}`} </h1>
          <h4>Question can have multiple answers</h4>

          <Answers
            options={quesCopy[currentQues].options}
            handleChange={handleAnswerChange}
          />
          <ProgressBar
            progress={percentage}
            next={next}
            prev={prev}
            submit={submit}
          />
          <MiniPlayer id={id} title={title} />
        </>
      )}
    </>
  );
}
