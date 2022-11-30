import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { TodoModel } from '../../TodoModel';

export const ENTITY_KEY = 'todo';

/*Create a todoAdapter. You only need selectId*/

export const initialState = todoAdapter.getInitialState();

const todoSlice = createSlice({
  name: ENTITY_KEY,
  initialState,
  reducers: {
    /*add actions that fit to the reducer */
  },
});

export const { reducer, actions } = todoSlice;

/*finally, add your actions, you defined, here! */
export const {} = actions;

export const selectors = todoAdapter.getSelectors();
