import { FaPhoneAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import c from "./Contact.module.css";

import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact: { number, name, id } }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={c.item}>
      <div>
        <p>
          <FaUser />
          {name}
        </p>
        <p>
          <FaPhoneAlt />
          {number}
        </p>
      </div>

      <button
        type="button"
        onClick={() => handleDeleteContact(id)}
        className={c.button}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
