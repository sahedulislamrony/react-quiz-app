import cssBtn from "../../styles/Button.module.css";
import css from "../../styles/ProgressBar.module.css";
import Range from "./Range";

export default function ProgressBar({ value }) {
  return (
    <div className={css.progressBar}>
      <div className={css.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <Range value={value} />

      <a href="result.html">
        <button className={`${cssBtn.button} ${css.next}`}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </button>
      </a>
    </div>
  );
}