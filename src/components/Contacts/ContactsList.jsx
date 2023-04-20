import { filterValue, getContacts } from 'redux/selectors';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import css from '../Contacts/ContactsList.module.css';

export const ContactsList = () => {
  const filter = useSelector(filterValue);
  const contacts = useSelector(getContacts);
  const normalizedFilterValue = filter.toLowerCase();
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilterValue)
  );

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li className={css.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
};

