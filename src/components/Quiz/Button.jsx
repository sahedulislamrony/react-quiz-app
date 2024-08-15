import css from "../../styles/Button.module.css";

export default function Button({ className, icon, children }) {
  return (
    <div className={`${css.button} ${className}`}>
      {children}
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  );
}
