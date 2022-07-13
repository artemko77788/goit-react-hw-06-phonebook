import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.filter.toLowerCase();

export const filteredContacts = createSelector(
  getContacts,
  getFilter,

  (contacts, filterValue) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().startsWith(filterValue)
    );
  }
);
