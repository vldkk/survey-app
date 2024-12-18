import { SurveyType } from '@/models';
import { getSurveys } from './survey';

export const getQuestionsStatisParams = async () => {
  try {
    const surveys = getSurveys();
    const params: {
      surveyId: string;
      id: string;
    }[] = [];

    surveys.forEach((survey) => {
      const questionIds = survey.questions.map((q) => q.id);

      questionIds.forEach((questionId: string) => {
        params.push({ surveyId: survey.id, id: questionId });
      });
    });

    return params;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getQuestions = async (surveyId: string) => {
  try {
    const { questions }: SurveyType = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/surveys/${surveyId}.json`
    ).then((res) => res.json());

    return questions;
  } catch (e) {
    console.error(e);
    return [];
  }
};
