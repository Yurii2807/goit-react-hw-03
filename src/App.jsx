import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
// import Contact from "./components/Contact/Contact";
import dataContacts from "../contacts.json";
import "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");

    return savedContacts !== null ? JSON.parse(savedContacts) : dataContacts;
  });
  const [filterContacts, setFilterContacts] = useState("");

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase().trim())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };
  const deleteContacts = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filterContacts} onFilter={setFilterContacts} />
      <ContactList contacts={visibleContacts} onDelete={deleteContacts} />
    </div>
  );
}

export default App;
