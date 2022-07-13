import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.todo.contacts.items;
export const getFilter = state => state.todo.contacts.filter.toLowerCase();

export const filteredContacts = createSelector(
  getContacts,
  getFilter,

  (contacts, filterValue) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().startsWith(filterValue)
    );
  }
);
