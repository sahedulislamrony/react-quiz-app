import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../assets/images/signup.svg";
import { useAuth } from "../../contexts/AuthContext";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function Signup() {
  let { currentUser } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration img={img} />
        <SignupForm />
      </div>
    </>
  );
}
