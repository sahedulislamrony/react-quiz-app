import { useRef } from "react";
import css from "../../styles/ProgressBar.module.css";

let handleOver = (tooltip) => {
  tooltip.current.style.display = "block";
};

let handleOut = (tooltip) => {
  tooltip.current.style.display = "none";
};

export default function Range({ value }) {
  let tooltip = useRef(null);

  return (
    <div className={css.rangeArea}>
      <div
        className={css.tooltip}
        ref={tooltip}
        style={{ left: `${value - 5.5}%` }}
      >
        {`${value}%`} Complete!
      </div>

      <div className={css.rangeBody}>
        <div
          className={css.progress}
          onMouseOver={() => handleOver(tooltip)}
          onMouseOut={() => handleOut(tooltip)}
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}
