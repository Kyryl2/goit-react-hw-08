import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import c from "./UserMenu.module.css";
const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={c.wrapper}>
      <p className={c.username}>Welcome, {user.name}</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={c.button}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
