import { useDispatch } from 'react-redux';
import { filterUsers } from '../../redux/todoSlice';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  return (
    <form>
      <label className={s.label}>
        Find contacts by name
        <input
          type="text"
          onChange={e => dispatch(filterUsers(e.currentTarget.value))}
          className={s.input}
        />
      </label>
    </form>
  );
}

export default Filter;
