import { createSlice } from '@reduxjs/toolkit';

const todoSlise = createSlice({
  name: 'todos',
  initialState: {
    contacts: { items: [] },
    filter: '',
  },

  reducers: {
    addUser(state, action) {
      for (const { name } of state.contacts.items) {
        if (name.toLowerCase() === action.payload.name.toLowerCase()) {
          alert(`${name} is already in contacts.`);
          return;
        }
      }

      state.contacts.items.push(action.payload);
    },
    deleteUser(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterUsers(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addUser, deleteUser, filterUsers } = todoSlise.actions;

export default todoSlise.reducer;