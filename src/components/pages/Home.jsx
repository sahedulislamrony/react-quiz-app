import { Link } from "react-router-dom";
import img from "../../assets/images/3.jpg";
import Video from "../Home/Video";
import Videos from "../Home/Videos";

export default function Home() {
  return (
    <Videos>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>

      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
      <Link to="/quiz">
        <Video img={img} txt="Quiz  01" numQ="10" />
      </Link>
    </Videos>
  );
}
