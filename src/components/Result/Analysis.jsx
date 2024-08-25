// import { useState } from "react";
import css from "../../styles/Analysis.module.css";
import Answers from "./Answers";
import Question from "./Question";

export default function Analysis({ answers }) {
  // let [currentAns, setCurrentAns] = useState(0);

  return (
    <div className={css.analysis}>
      <h1>Question Analysis</h1>

      {answers.map((question, index) => (
        <Question title={question?.title} key={index}>
          <Answers options={question.options} />
        </Question>
      ))}
    </div>
  );
}
