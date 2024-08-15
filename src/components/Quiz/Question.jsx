import css from "../../styles/Answers.module.css";
import Answers from "./Answers";
import MiniPlayer from "./MiniPlayer";
import Option from "./Option";
import ProgressBar from "./ProgressBar";

import thumb from "../../assets/images/3.jpg";

export default function Question(props) {
  let { title } = props;
  return (
    <>
      <h1> {title} </h1>
      <h4>Question can have multiple answers</h4>
      <Answers>
        <Option htmlFor="option1" className={css.correct}>
          A New Hope 1
        </Option>
        <Option htmlFor="option2"> A New Hope 2 </Option>
        <Option htmlFor="option3"> A New Hope 3 </Option>
        <Option htmlFor="option4"> A New Hope 4 </Option>
        <Option htmlFor="option5"> A New Hope 5 </Option>
        <Option htmlFor="option6"> A New Hope 6 </Option>
        <Option htmlFor="option7" className={css.wrong}>
          A New Hope 7
        </Option>
        <Option htmlFor="option8"> A New Hope 8 </Option>
        <Option htmlFor="option9"> A New Hope 9 </Option>
        <Option htmlFor="option10"> A New Hope 10 </Option>
      </Answers>

      <ProgressBar value="45" />
      <MiniPlayer img={thumb} title="React useReducer hook Bangla" />
    </>
  );
}
