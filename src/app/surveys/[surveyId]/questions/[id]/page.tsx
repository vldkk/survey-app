import Question from '@/components/Question/Question';
import { getQuestions, getQuestionsStatisParams } from '@/services';

export async function generateStaticParams() {
  const staticParams = await getQuestionsStatisParams();

  return staticParams;
}

type Params = {
  id: string;
  surveyId: string;
};

export default async function QuestionPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id, surveyId } = await params;
  const questions = await getQuestions(surveyId);
  const question = questions.find((question) => question.id === id);

  if (!question) {
    return <h1>No Question Found.</h1>;
  }

  return (
    <Question question={question} questions={questions} surveyId={surveyId} />
  );
}
