import { QuestionType } from '@/models';
import { RootState } from '@/store/store';

export const getNextQuestionId = (
  question: QuestionType,
  answers: RootState['answers']
): string | null => {
  const nextQuestion = question.nextQuestion;

  if (typeof nextQuestion === 'string') {
    return nextQuestion;
  }

  if ('previousAnswer' in nextQuestion) {
    const previousAnswer = nextQuestion.previousAnswer;

    for (const [key, mapping] of Object.entries(previousAnswer)) {
      const answerValue = answers[key];

      if (answerValue.id && mapping[answerValue.id]) {
        return mapping[answerValue.id];
      }
    }
  }

  for (const [key, value] of Object.entries(nextQuestion)) {
    if (answers[question.id].id === key) {
      return value;
    }
  }

  return null;
};
