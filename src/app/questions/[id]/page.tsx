import Question from '@/components/Question/Question';
import { getQuestions } from '@/services/question';

export async function generateStaticParams() {
  const questions = await getQuestions();

  return questions.map(({ id }) => ({ id }));
}

const getQuestion = async (id: string) => {
  const questions = await getQuestions();

  return questions.find((question) => question.id === id);
};

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const question = await getQuestion(id);
  const questions = await getQuestions();

  if (!question) {
    return <h1>No Question Found.</h1>;
  }

  return <Question question={question} questions={questions} />;
}
