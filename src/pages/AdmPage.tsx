import { useNavigate } from "react-router-dom";
import Login from "../layouts/Login";

export function AdmPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/admin/dashboard");
  };

  return <Login onLoginSuccess={handleLogin} />;
}
