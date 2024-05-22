import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div style={{ margin: "0 auto" }}>
      <h1 style={{ margin: 20, textAlign: "center" }}>Phonebook</h1>
      <ContactForm />
      <SearchBox />

      <ContactList />
    </div>
  );
};

export default ContactsPage;
