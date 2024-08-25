import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
      }}
    >
      <h2>
        404 - Page Not Found !{"     "}
        You can visit <Link to="/">Home</Link> .
      </h2>
    </div>
  );
}
