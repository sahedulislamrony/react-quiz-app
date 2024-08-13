import Video from "../Home/Video";
import Videos from "../Home/Videos";

import img from "../../assets/images/3.jpg";
export default function Home() {
  return (
    <Videos>
      <Video img={img} txt="Quiz  01" numQ="10" />
      <Video img={img} txt="Quiz  02" numQ="10" />
      <Video img={img} txt="Quiz  03" numQ="10" />
      <Video img={img} txt="Quiz  04" numQ="5" />
      <Video img={img} txt="Quiz  05" numQ="7" />
      <Video img={img} txt="Quiz  06" numQ="10" score="10/10" />
      <Video img={img} txt="Quiz  07" numQ="10" />
      <Video img={img} txt="Quiz  08" numQ="14" />
      <Video img={img} txt="Quiz  09" numQ="10" />
      <Video img={img} txt="Quiz  10" numQ="8" score="5/8" />
      <Video img={img} txt="Quiz  11" numQ="4" score="3/4" />
    </Videos>
  );
}
