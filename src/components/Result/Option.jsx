import css from "../../styles/Answers.module.css";

export default function Option({ checked, status, index, title }) {
  let txt = status == "correct" ? "Correct answer" : "Wrong answer";

  // status can be correct or wrong
  return (
    <label className={`${css.answer} ${css[status]}`} htmlFor={index}>
      <input
        type="checkbox"
        id={`option${index}`}
        defaultChecked={checked}
        disabled
      />
      <span> {title}</span>
      <span>{status && txt}</span>
    </label>
  );
}
