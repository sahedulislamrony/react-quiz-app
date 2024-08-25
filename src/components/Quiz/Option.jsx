import css from "../../styles/Answers.module.css";

export default function Option(props) {
  let { title, index, handleChange, checked } = props;

  return (
    <label className={css.answer} htmlFor={`option${index}`}>
      <input
        type="checkbox"
        id={`option${index}`}
        value={index}
        onChange={(e) => handleChange(e, index)}
        checked={checked}
      />
      {title}
    </label>
  );
}
