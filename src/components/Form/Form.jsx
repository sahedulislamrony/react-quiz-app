import css from "../../styles/Form.module.css";

export default function Form({ className, children, ...rest }) {
  return (
    <form className={`${css.form} ${className}`} action="#" {...rest}>
      {children}
    </form>
  );
}
