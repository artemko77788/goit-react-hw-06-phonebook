import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { GrBasket } from 'react-icons/gr';
import { BiArrowBack } from 'react-icons/bi';
import s from './Contacts.module.css';

import { deleteUser } from '../../redux/todoSlice';

import { filteredContacts } from 'redux/contacts-selector';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filteredContacts);

  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => {
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
