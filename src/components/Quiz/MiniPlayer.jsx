import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import css from "../../styles/MiniPlayer.module.css";

export default function MiniPlayer({ id, title }) {
  let card = useRef(null);
  let playerBtn = useRef(null);

  let [status, setStatus] = useState(false);

  let videoURL = `https://www.youtube.com/watch?v=${id}`;

  let handleOpen = (card, playerBtn) => {
    playerBtn.current.style.display = "none";
    card.current.style.display = "block";
    setStatus(true);
  };
  let handleClose = (card, playerBtn) => {
    card.current.style.display = "none";
    playerBtn.current.style.display = "flex";
    setStatus(false);
  };

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
        <ReactPlayer
          className={css.player}
          width="300px"
          height="168px"
          playing={status}
          controls
          url={videoURL}
        />
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
