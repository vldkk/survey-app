import { SurveyType } from '@/models';
import fs from 'fs';
import path from 'path';

export const getSurveys = () => {
  const surveysDir = path.join(process.cwd(), 'public/surveys');
  const surveyFiles = fs
    .readdirSync(surveysDir)
    .filter((file) => file.endsWith('.json'));

  const surveys = surveyFiles.map((surveyFile) => {
    const surveyId = surveyFile.replace('.json', '');
    const filePath = path.join(surveysDir, surveyFile);
    const fileContent: SurveyType = JSON.parse(
      fs.readFileSync(filePath, 'utf-8')
    );

    return {
      id: surveyId,
      questions: fileContent.questions,
    };
  });

  return surveys;
};
