import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import c from "./ContactList.module.css";

import { DNA } from "react-loader-spinner";
import selectFilteredContacts, {
  getIsLoading,
} from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const loading = useSelector(getIsLoading);

  return (
    <>
      <ul className={c.list}>
        {filteredContacts.map((contact) => {
          return <Contact key={contact.id} contact={contact} id={contact.id} />;
        })}
      </ul>
      {loading && (
        <DNA
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      )}
    </>
  );
};

export default ContactList;
