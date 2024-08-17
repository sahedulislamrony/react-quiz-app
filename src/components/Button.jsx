import css from "../styles/Button.module.css";

export default function Button({ children, ...rest }) {
  return (
    <button className={css.button} role="button" {...rest}>
      <span>{children}</span>
    </button>
  );
}
