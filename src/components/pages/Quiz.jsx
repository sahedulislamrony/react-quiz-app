import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Question from "../Quiz/Question";

export default function Quiz() {
  let { currentUser } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return <Question title="Pick three of your favorite Star Wars Flims" />;
}
