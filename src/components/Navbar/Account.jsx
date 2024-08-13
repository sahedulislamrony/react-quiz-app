import css from "../../styles/Account.module.css";

export default function Account({ icon }) {
  return (
    <div className={css.account}>
      <span className="material-icons-outlined" title="Account">
        {icon}
      </span>
      <a href="signup.html">Signup</a>

      {/* <span class="material-icons-outlined" title="Logout"> logout </span> */}
    </div>
  );
}
