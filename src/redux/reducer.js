import { combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

export const reducers = combineReducers({
    contacts: contactsReducer,
    filter: filterReducer,
});
