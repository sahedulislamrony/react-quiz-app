import video from "../../assets/videos/login2.mp4";
import Illustration from "../Illustration";

import LoginForm from "../LoginForm";
import PageTitle from "../PageTitle";

export default function Login() {
  return (
    <>
      <PageTitle title="Login || React Quiz App" />
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration video={video} />
        <LoginForm />
      </div>
    </>
  );
}
