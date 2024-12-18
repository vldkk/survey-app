import { OptionType } from './option';

export interface QuestionType {
  id: string;
  screenType: string;
  question: string;
  options: OptionType[];
  nextQuestion:
    | string
    | Record<string, string>
    | { previousAnswer: Record<string, Record<string, string>> };
  description?: string;
  descriptionType?: string;
}
