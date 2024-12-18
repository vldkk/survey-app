import React, { useState } from 'react';
import styles from './TextQuestion.module.scss';
import { RootState } from '@/store/store';
import { replaceDynamicValues } from '@/utils';
import { OptionType, QuestionType } from '@/models';

interface TextQuestionProps {
  question: QuestionType;
  answers: RootState['answers'];
  onSelectOption: (option: OptionType) => void;
}

const TextQuestion: React.FC<TextQuestionProps> = ({
  question,
  onSelectOption,
  answers,
}) => {
  const [selectedOption, setSelectedOption] = useState<OptionType>();

  const { description, descriptionType, options } = question;

  const handleSelectOption = (option: OptionType) => {
    setSelectedOption(option);
    onSelectOption(option);
  };

  return (
    <div
      className={`${styles.questionContainer} ${
        description ? styles.explanationText : ''
      } ${descriptionType === 'medium' ? styles.gradientContainer : ''}`.trim()}
    >
      <h1 className={styles.title}>
        {replaceDynamicValues(question.question, answers)}
      </h1>
      {description && (
        <p className={descriptionType === 'bold' ? styles.bold : styles.medium}>
          {replaceDynamicValues(description, answers)}
        </p>
      )}
      <ul className={styles.textContainer}>
        {options.map((option) => (
          <li key={option.id}>
            <button
              className={selectedOption === option ? styles.active : ''}
              onClick={() => handleSelectOption(option)}
            >
              {option.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextQuestion;
