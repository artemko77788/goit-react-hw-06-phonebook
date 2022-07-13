import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.todos.contacts.items;
export const getFilter = state => state.todos.contacts.filter.toLowerCase();

export const filteredContacts = createSelector(
  getContacts,
  getFilter,

  (contacts, filterValue) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().startsWith(filterValue)
    );
  }
);
