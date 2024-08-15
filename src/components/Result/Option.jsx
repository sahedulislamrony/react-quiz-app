import css from "../../styles/Answers.module.css";

export default function Option({ className, htmlFor, children }) {
  let txt;
  if (className == "wrong") txt = "Your answer";
  if (className == "correct") txt = "Correct answer";

  return (
    <label className={`${css.answer} ${css[className]}`} htmlFor={htmlFor}>
      <span> {children}</span>
      <span>{txt}</span>
    </label>
  );
}
