import { useDispatch } from 'react-redux';
import { filterUsers } from '../../redux/todoSlice';
import s from './Filter.module.css';

function Filter() {
  const handleInputChange = e => {
    dispatch(filterUsers(e.currentTarget.value));
  };

  const dispatch = useDispatch();

  return (
    <form>
      <label className={s.label}>
        Find contacts by name
        <input type="text" onChange={handleInputChange} className={s.input} />
      </label>
    </form>
  );
}

export default Filter;
