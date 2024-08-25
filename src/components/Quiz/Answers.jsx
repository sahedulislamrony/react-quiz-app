import Option from "./Option";

import css from "../../styles/Answers.module.css";

export default function Answers({ options, handleChange }) {
  return (
    <div className={css.answers}>
      {options.map((option, index) => (
        <Option
          key={index}
          title={option.title}
          index={index}
          checked={option.checked}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}
