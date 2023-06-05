import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
// import initialContacts from './contacts.json';
import { useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact } from 'redux/contacts/slice';
import { changeFilter } from 'redux/filter/slice';

// const getInitialContacts = () => {
//   const savedContacts = localStorage.getItem('contacts');
//   if (savedContacts !== null) {
//     return JSON.parse(savedContacts);
//   } else {
//     return initialContacts;
//   }
// };

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (contact, name) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    } else {
      const newContact = { ...contact, id: nanoid() };

      dispatch(addContact(newContact));
    }
  };

  const deleteContactHandler = contactID => {
    dispatch(deleteContact(contactID));
  };

  const changeFilterHandler = event => {
    dispatch(changeFilter(event.currentTarget.value));
  };

  const getVisiblesContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisiblesContacts();

  return (
    <Layout>
      <h1>Phonebook</h1>
      <ContactForm onSave={addContactHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilterHandler} />
      <ContactList items={visibleContacts} onDelete={deleteContactHandler} />
      <GlobalStyle />
    </Layout>
  );
};
