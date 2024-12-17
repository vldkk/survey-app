import { configureStore } from '@reduxjs/toolkit';
import answersReducer from './slices/answersSlice';

export const store = configureStore({
  reducer: {
    answers: answersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
