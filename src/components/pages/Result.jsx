import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";

import PageTitle from "../PageTitle";
import Analysis from "../Result/Analysis";
import Summary from "../Result/Summary";

export default function Result() {
  let { id } = useParams();
  let { loading, error, answers } = useAnswers(id);
  let { state: result } = useLocation();
  // let { result } = useResult(id);

  function calculateScore(weight) {
    let score = 0;

    answers.forEach((question, index1) => {
      let checked = [],
        correct = [];

      question.options.forEach((option, index2) => {
        if (option.correct) {
          correct.push(index2);
        }
        if (result[index1]?.options[index2].checked) {
          checked.push(index2);
          option.checked = true;
        }
      });

      if (_.isEqual(checked, correct)) {
        score += 1;
      }
    });

    return score * weight;
  }

  // check if user direct hit the result page
  if (!result) {
    return <h1 style={{ color: "red" }}>There was an error !</h1>;
  }

  const score = calculateScore(5);

  return (
    <>
      <PageTitle title="Result || React Quiz App" />

      {loading && <h2>Loading...</h2>}
      {error && <h2>There is an error </h2>}
      {!loading && !error && answers && answers.length > 0 && (
        <>
          <Summary score={score} total={answers.length * 5} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
