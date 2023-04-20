import css from '../Filter/Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterValue } from 'redux/selectors';
import { setFilteredContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterValue);

  const filterInputChange = ({ target }) => {
    dispatch(setFilteredContacts(target.value));
  };

  return (
    <>
      <label htmlFor="">
        Find contacts by name:
        <input
          className={css.input}
          type="text"
          name="filter"
          onChange={filterInputChange}
          value={filter}
        />
      </label>
    </>
  );
};
