'use client';

import { useSelector } from 'react-redux';
import { selectAnswers } from '@/store/selectors/answers';

import styles from './results.module.scss';

export default function ResultsPage() {
  const answers = useSelector(selectAnswers);

  return (
    <main className={styles.container}>
      <h1>Survey Results</h1>
      <div className={styles.resultsCard}>
        <ul>
          {Object.entries(answers).map(([questionId, answer]) => (
            <li key={questionId}>
              <strong>{questionId}:</strong> {answer.title}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
