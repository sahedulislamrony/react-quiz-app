import Layout from "./components/Layout";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";

import NotFound from "./components/pages/NotFound";
import Page404 from "./components/pages/Page404";
import Quiz from "./components/pages/Quiz";
import Result from "./components/pages/Result";
import "./styles/global.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            {/* Page Not Found (404) Route */}
            <Route path="*" element={<NotFound />} />
            <Route path="/404" element={<Page404 />} />

            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />

            <Route element={<PublicRoute />} path="/*">
              <Route path="signup" element={<Signup />} />
              <Route path="login" element={<Login />} />
            </Route>

            <Route element={<PrivateRoute />} path="/*">
              <Route path="quiz/:id" element={<Quiz />} />
              <Route path="result/:id" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}
