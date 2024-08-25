import Option from "./Option";

import css from "../../styles/Answers.module.css";

export default function Answers({ options }) {
  return (
    <div className={css.answers}>
      {options.map((option, index) => {
        let status;
        if (option.correct) {
          status = "correct";
        } else if (option.checked && !option.correct) {
          status = "wrong";
        }

        return (
          <Option
            key={index}
            status={status}
            title={option.title}
            index={index}
            checked={option.checked}
          />
        );
      })}
    </div>
  );
}
