'use client';

import { useSelector } from 'react-redux';
import { selectAnswers } from '@/store/selectors/answers';

import styles from './results.module.scss';

export default function ResultsPage() {
  const answers = useSelector(selectAnswers);

  return (
    <main className={styles.container}>
      <h1>Survey Results</h1>
      <ul>
        {Object.entries(answers).map(([questionId, answer]) => (
          <li key={questionId}>
            {questionId}: {answer.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
