import logo from "../../assets/images/logo.png";
import css from "../../styles/Navbar.module.css";
import Account from "./Account";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className={css.nav}>
      <ul>
        <li>
          <Link to="/" className={css.brand}>
            <img src={logo} alt="Quiz App logo Logo" />
            <h3>React Quiz App</h3>
          </Link>
        </li>
      </ul>

      <Account icon="account_circle" />
    </nav>
  );
}
