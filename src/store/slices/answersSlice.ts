import { OptionType } from '@/models/question';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnswersState {
  [key: string]: OptionType;
}

const initialState: AnswersState = {};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    saveAnswer: (
      state,
      action: PayloadAction<{ questionId: string; answer: OptionType }>
    ) => {
      const { questionId, answer } = action.payload;
      state[questionId] = answer;
    },
    resetAnswers: () => initialState,
  },
});

export const { saveAnswer, resetAnswers } = answersSlice.actions;
export default answersSlice.reducer;
