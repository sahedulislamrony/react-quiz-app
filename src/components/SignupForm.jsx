import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import Form from "./Form/Form";

import Button from "./Button";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";

import { Link } from "react-router-dom";

export default function SignupForm() {
  let { signup } = useAuth();
  let navigate = useNavigate();
  // States
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password1, setPasswerd1] = useState("");
  let [password2, setPasswerd2] = useState("");
  let [agree, setAgree] = useState(false);
  let [err, setErr] = useState("");
  let [loading, setLoading] = useState(false);

  // handle submit event
  async function submit(e) {
    e.preventDefault();

    // client validation

    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!username) {
      return setErr("Name field cannot be blank!");
    } else if (!regex.test(email)) {
      return setErr("Invalid email!");
    } else if (password1 != password2) {
      return setErr("Password dosenot match!");
    } else if (password1.length < 6) {
      return setErr("Password should be at least 6 charecters!");
    } else if (!agree) {
      return setErr("Accept our terms & conditions!");
    }

    try {
      setErr("");

      setLoading(true);
      // Creating an account via firebase
      await signup(email, password1, username);

      // Redirecting to home
      navigate("/");
    } catch (error) {
      console.log(error);
      setErr("Failed to create an account!");
      setLoading(false);
    }
  }

  return (
    <Form
      onSubmit={submit}
      style={{
        height: "500px",
      }}
    >
      <Input
        type="text"
        placeholder="Enter name"
        icon="person"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password1}
        onChange={(e) => setPasswerd1(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Confirm password"
        icon="lock_clock"
        value={password2}
        onChange={(e) => setPasswerd2(e.target.value)}
      />
      <Checkbox value={agree} onChange={(e) => setAgree(e.target.checked)}>
        I agree to the Terms & Conditions
      </Checkbox>

      <Button type="submit " disabled={loading}>
        {loading ? "Loading..." : "Signin  Now"}
      </Button>

      {err && <div className="error">{err}</div>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
