import { useRef } from "react";
import css from "../../styles/ProgressBar.module.css";

let handleOver = (tooltip) => {
  tooltip.current.style.display = "block";
};

let handleOut = (tooltip) => {
  tooltip.current.style.display = "none";
};

export default function Range({ progress }) {
  let tooltip = useRef(null);

  return (
    <div className={css.rangeArea}>
      <div
        className={css.tooltip}
        ref={tooltip}
        style={{ left: `${progress - 5.5}%` }}
      >
        {`${progress}%`} Complete!
      </div>

      <div className={css.rangeBody}>
        <div
          className={css.progress}
          onMouseOver={() => handleOver(tooltip)}
          onMouseOut={() => handleOut(tooltip)}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
