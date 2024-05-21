import { NavLink } from "react-router-dom";
import c from "./AuthNav.module.css";
const AuthNav = () => {
  return (
    <div>
      <NavLink className={c.link} to="/register">
        Register
      </NavLink>
      <NavLink className={c.link} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
export default AuthNav;
