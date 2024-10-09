import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/auth";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    const isSuccesful = logout();
    if (isSuccesful) {
      navigate("/login");
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return null;
};

export default Logout;
