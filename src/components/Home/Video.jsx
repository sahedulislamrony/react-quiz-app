import css from "../../styles/Video.module.css";

export default function Video({ title, id, noq }) {
  return (
    <div className={css.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt="Quiz Image"
      />
      <p>{title}</p>
      <div className={css.qmeta}>
        <p>{`${noq} Questions`}</p>
        <p>{`Total mark : ${noq * 5}`}</p>
      </div>
    </div>
  );
}

// http://img.youtube.com/vi/${id}/maxresdefault.jpg

// youtube api for requesting video thubmnail through video id
