import css from "../../styles/R.Question.module.css";

export default function Question({ title, children }) {
  return (
    <>
      <div className={css.question}>
        <div className={css.qtitle}>
          <span className="material-icons-outlined"> help_outline </span>
          {title}
        </div>
        {children}
      </div>
    </>
  );
}
