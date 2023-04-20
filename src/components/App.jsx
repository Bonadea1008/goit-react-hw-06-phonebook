import { InputForm } from './Form/Form';
import { Section } from './Section/Section';
import { ContactsList } from './Contacts/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {
  return (
    <>
      <Section title="Phonebook">
        <InputForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </>
  );
}
