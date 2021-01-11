import { configureStore } from '@reduxjs/toolkit';
import firestoreReducer from './firestoreSlice';

export default configureStore({
  reducer: {
    firestore: firestoreReducer
  },
});
