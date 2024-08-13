import css from "../styles/Illustration.module.css";

export default function Illustration({ img }) {
  return (
    <div className={css.illustration}>
      <img src={img} alt="Image" />
    </div>
  );
}
