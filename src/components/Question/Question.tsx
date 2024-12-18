'use client';

import { saveAnswer } from '@/store/slices/answersSlice';
import { getNextQuestionId } from '@/utils';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import IconArrowBack from '@/components/icons/IconArrowBack';
import TextQuestion from '@/components/TextQuestion/TextQuestion';
import { OptionType, QuestionType } from '@/models';

import styles from './Question.module.scss';
import { selectAnswers } from '@/store/selectors';

type Props = {
  surveyId: string;
  question: QuestionType;
  questions: QuestionType[];
};

const Question = (props: Props) => {
  const { question, questions, surveyId } = props;

  const router = useRouter();
  const dispatch = useDispatch();
  const answers = useSelector(selectAnswers);

  const hasGradient =
    question?.description && question.descriptionType === 'medium';

  const handleBack = () => router.back();

  const handleNext = (answer: OptionType) => {
    const updatedAnswers = { ...answers, [question.id]: answer };

    dispatch(saveAnswer({ questionId: question.id, answer }));
    const nextQuestionId = getNextQuestionId(question, updatedAnswers);

    router.push(
      nextQuestionId
        ? `/surveys/${surveyId}/questions/${nextQuestionId}`
        : '/results'
    );
  };

  return (
    <main
      className={`${styles.container} ${
        hasGradient ? styles.gradientBackground : ''
      }`}
    >
      {question.id !== questions[0].id && (
        <button onClick={handleBack} className={styles.backButton}>
          <IconArrowBack
            className={hasGradient ? styles.gradientArrow : styles.mainArrow}
          ></IconArrowBack>
        </button>
      )}

      <Image
        src={hasGradient ? '/logo-white.svg' : '/logo-black.svg'}
        alt="Logo"
        width={15}
        height={16}
        className={styles.logo}
        priority
      />

      {question.screenType === 'text' && (
        <TextQuestion
          answers={answers}
          question={question}
          onSelectOption={handleNext}
        />
      )}
    </main>
  );
};

export default Question;
