import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = ({ items, onDelete }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const getVisiblesContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisiblesContacts();

  return (
    <ul>
      {visibleContacts.map(item => (
        <li key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
};
