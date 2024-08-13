import css from "../../styles/Input.module.css";

export default function Input(props) {
  let { type, placeholder, icon } = props;

  return (
    <div className={css.textInput}>
      <input type={type} placeholder={placeholder} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
