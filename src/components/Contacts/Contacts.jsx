import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { GrBasket } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import s from './Contacts.module.css';

import { deleteUser } from '../../redux/todoSlice';
import { getContacts, getFilter } from 'redux/getTodos';

const Contacts = () => {
  const dispatch = useDispatch();
  const users = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterByUsers = () => {
    return [...users].filter(contacts =>
      contacts.name.toLowerCase().startsWith(filter)
    );
  };
  const data = filterByUsers();

  return (
    <ul className={s.list}>
      {data.map(({ name, id, number }) => {
        return (
          <li key={id} className={s.item}>
            <span>{name}</span>: <span>{number}</span>
            <button
              key={id}
              onClick={() => dispatch(deleteUser(id))}
              className={s.btn}
            >
              <BiArrowBack className={s.arrow} />
              <GrBasket />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

Contacts.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default Contacts;
