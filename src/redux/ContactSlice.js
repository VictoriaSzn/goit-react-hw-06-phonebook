import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactsArr = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const contactSlice = createSlice({
    name: 'contacts',
    initialState: { contacts: [...contactsArr] },
    reducers: {
        addContact:{
            reducer(state, action) {
            state.contacts.unshift(action.payload);
             },
            prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        delContact(state, action) {
            const index = state.contacts.findIndex(
                task => task.id === action.payload
            );
            state.contacts.splice(index, 1);
        },
    },
});
export const { addContact, delContact } = contactSlice.actions;