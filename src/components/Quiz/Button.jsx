import css from "../../styles/Button.module.css";

export default function Button({ className, icon, children, ...rest }) {
  return (
    <button className={`${css.button} ${className}`} {...rest}>
      {children}
      <span className="material-icons-outlined"> {icon} </span>
    </button>
  );
}
