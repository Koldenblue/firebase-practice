import { createSlice } from '@reduxjs/toolkit';

export const firestoreSlice = createSlice({
  name: 'firestore',
  initialState: {
    db: null
  },
  reducers: {
    setDb: (state, action) => {
      // This is set by the login and logout functions. currentUser is the username.
      state.db = action.payload;
    }
  }
});

export const selectDb = state => state.firestore.db;

export const { setDb } = firestoreSlice.actions;

export default firestoreSlice.reducer;