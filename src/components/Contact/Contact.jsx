import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import css from './Contact.module.css';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const contactDeleteHandler = () => dispatch(deleteContact(contact.id));
  
  return (
    <>
      <p className={css.text}>
        {contact.name}: {contact.number}
      </p>
      <button className={css.btn} type="button" onClick={contactDeleteHandler}>
        Delete
      </button>
      ;
    </>
  );
};
