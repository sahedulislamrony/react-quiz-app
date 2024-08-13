import img from "../../assets/images/login.svg";
import css from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form/Form";
import Input from "../Form/Input";
import Illustration from "../Illustration";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration img={img} />
        <Form className={`${css.login}`}>
          <Input type="text" placeholder="Enter email" icon="alternate_email" />
          <Input type="password" placeholder="Enter password" icon="lock" />
          <Button>Submit Now</Button>

          <div className="info">
            Don&apos;t have an account? <a href="signup.html">Signup</a>{" "}
            instead.
          </div>
        </Form>
      </div>
    </>
  );
}
