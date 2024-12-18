import { RootState } from '@/store/store';

export const replaceDynamicValues = (
  template: string,
  answers: RootState['answers']
): string =>
  template.replace(/\{([^}]+)\}/g, (_, key) => {
    if (key === 'Gender') {
      return answers['gender']?.title || '';
    }

    if (key === 'who have children (if have children)') {
      return answers['single-parent']?.title === 'Yes' ||
        answers['parent']?.title === 'Yes'
        ? 'who have children'
        : '';
    }

    return answers[key]?.title || '';
  });
