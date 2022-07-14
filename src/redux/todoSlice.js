import { combineReducers, createSlice } from '@reduxjs/toolkit';

const todoSlise = createSlice({
  name: 'items',
  initialState: {
    items: [],
  },

  reducers: {
    addUser(state, action) {
      for (const { name } of state.items) {
        if (name.toLowerCase() === action.payload.name.toLowerCase()) {
          alert(`${name} is already in contacts.`);
          return;
        }
      }

      state.items.push(action.payload);
    },
    deleteUser(state, action) {
      state.items = state.items.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const filterSlise = createSlice({
  name: 'value',
  initialState: {
    value: '',
  },
  reducers: {
    filterUsers(state, action) {
      state.value = action.payload;
    },
  },
});

export const { addUser, deleteUser } = todoSlise.actions;
export const { filterUsers } = filterSlise.actions;
const filterReduser = filterSlise.reducer;
const itemsReduser = todoSlise.reducer;

export const rootReduser = combineReducers({
  contacts: itemsReduser,
  filter: filterReduser,
});
