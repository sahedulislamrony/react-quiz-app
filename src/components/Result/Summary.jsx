import img from "../../assets/images/success.png";
import css from "../../styles/Summary.module.css";

export default function Summary({ total, score }) {
  return (
    <div className={css.summary}>
      <div className={css.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p className={css.score}>
          Your score is <br />
          {score} out of {total}
        </p>
      </div>

      <div className={css.badge}>
        <img src={img} alt="Success" />
      </div>
    </div>
  );
}
