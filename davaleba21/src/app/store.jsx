import { configureStore } from '@reduxjs/toolkit';
import crudReducer from '../features/crudSlice';
import themeReducer from '../features/themeSlice';

export const store = configureStore({
  reducer: {
    crud: crudReducer,
    theme: themeReducer
  }
});
