import img from "../../assets/images/login.svg";
import Illustration from "../Illustration";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import LoginForm from "../LoginForm";

export default function Login() {
  let { currentUser } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration img={img} />
        <LoginForm />
      </div>
    </>
  );
}
