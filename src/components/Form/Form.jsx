import { useEffect, useRef } from "react";
import css from "../../styles/Form.module.css";

export default function Form({ className, children, ...rest }) {
  let form = useRef();

  useEffect(() => {
    form.current.reset();
  }, []);

  return (
    <form ref={form} className={`${css.form} ${className}`} {...rest}>
      {children}
    </form>
  );
}
