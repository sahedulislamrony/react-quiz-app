import css from "../../styles/Input.module.css";

export default function Input(props) {
  let { icon, ...rest } = props;

  return (
    <div className={css.textInput}>
      <input {...rest} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
