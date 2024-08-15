import { useState } from "react";
import css from "../../styles/Answers.module.css";

export default function Option(props) {
  let { className, children, htmlFor } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <label className={`${css.answer} ${className}`} htmlFor={htmlFor}>
      <input
        type="checkbox"
        id={htmlFor}
        onChange={handleChange}
        checked={checked}
      />
      {children}
    </label>
  );
}
