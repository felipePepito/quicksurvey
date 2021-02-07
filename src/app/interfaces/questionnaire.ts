import { Question } from './question';

export interface Questionnaire {
  id: string;
  title: string;
  createdAt: Date;
  questions: Array<Question>;
}
