import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Analysis from "../Result/Analysis";
import Summary from "../Result/Summary";

export default function Result() {
  let { currentUser } = useAuth();
  let navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);
  return (
    <>
      <Summary total="15" obtain="9" />
      <Analysis total="15" obtain="9" />
    </>
  );
}
