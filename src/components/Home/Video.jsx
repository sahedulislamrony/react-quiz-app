import { Link } from "react-router-dom";
import css from "../../styles/Video.module.css";

export default function Video({ img, txt, numQ, score = "Not taken yet" }) {
  return (
    <Link to="/quiz">
      <div className={css.video}>
        <img src={img} alt="Quiz Image" />
        <p>{txt}</p>
        <div className={css.qmeta}>
          <p>{`${numQ} Questions`}</p>
          <p>{`Score : ${score}`}</p>
        </div>
      </div>
    </Link>
  );
}
