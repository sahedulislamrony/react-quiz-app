import Navbar from "../components/Navbar/Navbar";
import css from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className={css.main}>
        <div className={css.container}>{children}</div>
      </main>
    </>
  );
}
