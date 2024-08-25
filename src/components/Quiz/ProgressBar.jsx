import cssBtn from "../../styles/Button.module.css";
import css from "../../styles/ProgressBar.module.css";
import Range from "./Range";

// eslint-disable-next-line no-unused-vars
export default function ProgressBar({ progress, next, prev, submit }) {
  return (
    <div className={css.progressBar}>
      <div className={css.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>

      <Range progress={progress} />

      <button
        className={`${cssBtn.button} ${css.next}`}
        onClick={progress == 100 ? submit : next}
      >
        {progress != 100 && (
          <>
            <span>Next Question</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </>
        )}

        {progress == 100 && (
          <>
            <span>Submit Quiz</span>
            <span className="material-icons-outlined">arrow_upward</span>
          </>
        )}
      </button>
    </div>
  );
}
