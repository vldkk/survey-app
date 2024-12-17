import { QuestionType } from '@/models/question';

export const getQuestions = async () => {
  try {
    const {
      questions,
    }: {
      questions: QuestionType[];
    } = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/survey-config.json`
    ).then((res) => res.json());

    return questions;
  } catch (e) {
    console.error(e);
    return [];
  }
};
