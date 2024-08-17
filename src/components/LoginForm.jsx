import css from "../styles/Login.module.css";
import Button from "./Button";
import Form from "./Form/Form";
import Input from "./Form/Input";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function LoginForm() {
  let { login } = useAuth();
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");
  let [loading, setLoading] = useState(false);

  // handle submit event
  async function submit(e) {
    e.preventDefault();

    // client validation
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regex.test(email)) {
      return setErr("Invalid email!");
    } else if (password.length < 6) {
      return setErr("Incorrect password!");
    }

    try {
      setErr("");
      setLoading(true);
      // login via firebase
      await login(email, password);

      // Redirecting to home
      navigate("/");
    } catch (error) {
      console.log(error);
      setErr("Failed to loged in !");
      setLoading(false);
    }
  }

  return (
    <Form className={`${css.login}`} onSubmit={submit}>
      <Input
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErr("");
        }}
      />
      <Input
        type="password"
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setErr("");
        }}
      />
      <Button type="submit" disabled={loading}>
        {loading ? "Loading..." : "Login Now"}
      </Button>

      {err && <div className="error">{err}</div>}
      <div className="info">
        Don&apos;t have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
