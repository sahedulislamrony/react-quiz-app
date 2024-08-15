import css from "../../styles/Analysis.module.css";
import Question from "./Question";

import Answers from "../Quiz/Answers";
import Option from "./Option";

export default function Analysis({ total, obtain }) {
  return (
    <div className={css.analysis}>
      <h1>Question Analysis</h1>
      <h4>
        You answerd {obtain} out of {total} questions correctly
      </h4>

      <Question title="Here goes the question from Learn with Sumit?">
        <Answers>
          <Option htmlFor="option1" className="correct">
            A New Hope 1
          </Option>
          <Option> A New Hope 2 </Option>
          <Option> A New Hope 3 </Option>
          <Option> A New Hope 4 </Option>
          <Option> A New Hope 5 </Option>
          <Option> A New Hope 6 </Option>
          <Option>A New Hope 7</Option>
          <Option> A New Hope 8 </Option>
          <Option> A New Hope 9 </Option>
          <Option> A New Hope 10 </Option>
        </Answers>
      </Question>

      <Question title="Here goes the question from Learn with Sumit?">
        <Answers>
          <Option className="correct">A New Hope 1</Option>
          <Option> A New Hope 2 </Option>
          <Option className="correct"> A New Hope 3 </Option>
          <Option> A New Hope 4 </Option>
          <Option> A New Hope 5 </Option>
          <Option> A New Hope 6 </Option>
          <Option className="wrong">A New Hope 7</Option>
          <Option> A New Hope 8 </Option>
          <Option> A New Hope 9 </Option>
          <Option> A New Hope 10 </Option>
        </Answers>
      </Question>
    </div>
  );
}
