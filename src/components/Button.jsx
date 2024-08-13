import css from "../styles/Button.module.css";

export default function Button({ children }) {
  return (
    <div className={css.button}>
      <span>{children}</span>
    </div>
  );
}
