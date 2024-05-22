import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import c from "./Navigation.module.css";
import clsx from "clsx";
const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(c.link, isActive && c.active);
  };
  return (
    <nav>
      <NavLink className={(isActive) => buildLinkClass(isActive)} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          className={(isActive) => buildLinkClass(isActive)}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
