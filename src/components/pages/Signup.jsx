import video from "../../assets/videos/signup2.mp4";
import Illustration from "../Illustration";
import PageTitle from "../PageTitle";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <PageTitle title="Signup || React Quiz App" />
      <h1>Create an account</h1>
      <div className="column">
        <Illustration video={video} />
        <SignupForm />
      </div>
    </>
  );
}
