import { combineReducers, createSlice } from '@reduxjs/toolkit';

const todoSlise = createSlice({
  name: 'items',
  initialState: [],

  reducers: {
    addUser(state, action) {
      for (const { name } of state) {
        if (name.toLowerCase() === action.payload.name.toLowerCase()) {
          alert(`${name} is already in contacts.`);
          return;
        }
      }

      state.push(action.payload);
    },
    deleteUser(state, action) {
      const items = state.filter(contact => contact.id !== action.payload);
      return (state = items);
    },
  },
});

const filterSlise = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    filterUsers(state, action) {
      return (state = action.payload);
    },
  },
});

export const { addUser, deleteUser } = todoSlise.actions;
export const { filterUsers } = filterSlise.actions;
const filter = filterSlise.reducer;
const items = todoSlise.reducer;

export const rootReduser = combineReducers({
  items,
  filter,
});
