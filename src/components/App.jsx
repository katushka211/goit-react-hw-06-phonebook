import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/slice';
import { changeFilter } from 'redux/filter/slice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.initialContacts);
  const filter = useSelector(state => state.filter);

  // const addContactHandler = (contact, name) => {
  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   } else {
  //     const newContact = { ...contact, id: nanoid() };

  //     dispatch(addContact(newContact));
  //   }
  // };

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
      <ContactForm />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilterHandler} />
      <ContactList items={visibleContacts} onDelete={deleteContactHandler} />
      <GlobalStyle />
    </Layout>
  );
};
