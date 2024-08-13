import logo from "../../assets/images/logo-bg.png";
import css from "../../styles/Navbar.module.css";
import Account from "./Account";

export default function Navbar() {
  return (
    <nav className={css.nav}>
      <ul>
        <li>
          <a href="index.html" className={css.brand}>
            <img src={logo} alt="Quiz App logo Logo" />
            <h3>React Quiz App</h3>
          </a>
        </li>
      </ul>

      <Account icon="account_circle" />
    </nav>
  );
}
