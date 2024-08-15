import { Link } from "react-router-dom";
import css from "../../styles/Account.module.css";

export default function Account({ icon }) {
  return (
    <div className={css.account}>
      <span className="material-icons-outlined" title="Account">
        {icon}
      </span>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>

      {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
