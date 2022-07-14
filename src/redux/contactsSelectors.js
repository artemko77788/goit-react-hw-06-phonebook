import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter.toLowerCase();

export const filteredContacts = createSelector(
  getContacts,
  getFilter,

  (contacts, filterValue) => {
    console.log(filterValue);
    const filterContacts = contacts.filter(({ name }) =>
      name.toLowerCase().startsWith(filterValue)
    );
    return filterContacts;
  }
);
