import css from "../../styles/Signup.module.css";
import Form from "../Form/Form";

import img from "../../assets/images/signup.svg";
import Button from "../Button";
import Checkbox from "../Form/Checkbox";
import Input from "../Form/Input";
import Illustration from "../Illustration";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration img={img} />

        <Form className={`${css.signup}`}>
          <Input type="text" placeholder="Enter name" icon="person" />
          <Input type="text" placeholder="Enter email" icon="alternate_email" />
          <Input type="password" placeholder="Enter password" icon="lock" />
          <Input
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />
          <Checkbox>I agree to the Terms & Conditions</Checkbox>
          <Button>Submit Now</Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
