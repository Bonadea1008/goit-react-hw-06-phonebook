import { InputForm } from './Form/Form';
import { Section } from './Section/Section';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContacts);
  return (
    <>
      <Section title="Phonebook">
        <InputForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      )}
    </>
  );
}
