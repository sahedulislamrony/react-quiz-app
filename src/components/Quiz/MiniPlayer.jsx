import { useRef } from "react";
import css from "../../styles/MiniPlayer.module.css";

let handleOpen = (card, playerBtn) => {
  playerBtn.current.style.display = "none";
  card.current.style.display = "block";
};
let handleClose = (card, playerBtn) => {
  card.current.style.display = "none";
  playerBtn.current.style.display = "flex";
};

export default function MiniPlayer({ img, title }) {
  let card = useRef(null);
  let playerBtn = useRef(null);

  return (
    <div className={css.miniPlayer}>
      <div
        className={css.floatingBtn}
        ref={playerBtn}
        onClick={() => handleOpen(card, playerBtn)}
      >
        <span className={`material-icons-outlined ${css.open}`}>
          play_circle_filled
        </span>
      </div>
      <div className={css.card} ref={card}>
        <span
          className={`material-icons-outlined ${css.close}`}
          onClick={() => handleClose(card, playerBtn)}
        >
          close
        </span>
        <img src={img} alt="Video Thumbnail" />
        <p>{title}</p>
      </div>
    </div>
  );
}

// Design description :
//  - 2 Root div
//  - they will be super positioned
//  - saparate indepandent design should be applied
//  - by the click on a single element the visibility of these elements
//    will be altered
