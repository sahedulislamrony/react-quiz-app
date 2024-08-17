import { Link, useNavigate } from "react-router-dom";
import css from "../../styles/Account.module.css";

import { useAuth } from "../../contexts/AuthContext";
export default function Account({ icon }) {
  let { currentUser, logout } = useAuth();
  let navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={css.account}>
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            {icon}
          </span>
          {currentUser.displayName}
          {"  "}
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={handleLogout}
          >
            logout
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
