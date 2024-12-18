import { getSurveys } from '@/services';
import Link from 'next/link';
import styles from './page.module.scss';

const Page = () => {
  const surveys = getSurveys();

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Available Surveys</h1>
      <div className={styles.surveysList}>
        {surveys.map(async (survey) => (
          <Link
            key={survey.id}
            href={`/surveys/${survey.id}/questions/${survey.questions[0].id}`}
            className={styles.surveyCard}
          >
            <span>{survey.id}</span>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Page;
