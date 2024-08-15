import { useState } from "react";
import css from "../../styles/Input.module.css";

export default function Input(props) {
  let { type, placeholder, icon } = props;

  let [value, setValue] = useState();

  let handleChange = (e) => {
    setValue(() => {
      value = e.target.value;
    });
  };

  return (
    <div className={css.textInput}>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
      />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
