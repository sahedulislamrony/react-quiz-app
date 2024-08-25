import css from "../styles/Illustration.module.css";
export default function Illustration({ video }) {
  return (
    <div className={css.illustration}>
      {/* <ReactPlayer
        className={css.player}
        width="300px"
        height="168px"
        playing={true}
        url={url}
        loop={true}
        muted={true}
      /> */}

      <video className={css.player} autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
